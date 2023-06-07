import { Component, EventEmitter, Inject, Injectable, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Project } from 'src/app/model/project';
import { RestapiService } from 'src/app/services/restapi';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  @Input() tags?: string[];
  control = new FormControl();

  add:string = "Add";
  editing: boolean = false;
  editid:any;
  userid!:any;
  
  newTag: string ="";

  projectForm!: FormGroup;
  
  vaidTag : boolean = true;
  tagerror : string ="";
  p: Project | undefined;


  
  constructor(private restapiService: RestapiService, public snackBar: MatSnackBar, private route: ActivatedRoute) {
    this.userid = sessionStorage.getItem("userid");

    this.restapiService.findAll(this.userid).subscribe((data) => {
      const t : Set<string> = new Set<string>();
      
      data.forEach(project => project.skills?.split(", ").forEach(s => t.add(s)));

      this.tags = Array.from(t.values());
    });
    const urlreg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

    console.log(this.editid);
    if(this.editid!==undefined){
      this.editing =true;
      this.edit();
    }
    
    this.projectForm = new FormGroup({
      title: new FormControl(this.p?.title, [
        Validators.required
      ]),
      skills: new FormControl(this.p?.skills),
      github: new FormControl(this.p?.github, [
        Validators.pattern(urlreg)
      ]),
      site: new FormControl(this.p?.site, [
        Validators.pattern(urlreg)
      ]),
      description: new FormControl(this.p?.title)
    });
  }

  get title(): any { return this.projectForm.get('title');}
  get github(): any { return this.projectForm.get('github');}
  get site(): any { return this.projectForm.get('site');}
  

  edit():void{
    this.add ="Edit";

    this.restapiService.find(this.editid).subscribe({
      next: (response) => 
      this.projectForm.patchValue({
        title: response.title,
        skills: skillEdit(response.skills),
        github: response.github,
        site: response.site,
        description: response.description
      }),
      error: (error) => console.log(error),
    });
  }

  onSubmit() { 
    if(this.projectForm.value!==undefined){    
      if(this.projectForm.value.skills instanceof Array){   
        this.projectForm.value.skills = skillsList(this.projectForm.value.skills);
      }

        this.projectForm.value.id= this.editid;
        this.projectForm.value.uid= this.userid;
        console.log(this.projectForm.value);

      if(this.editing){ 
            this.restapiService.update(this.projectForm.value, this.editid).subscribe({
            next: (response) => this.openSnackBar("Project edit successfully"),
            error: (error) => this.openSnackBar("Project edit failed"),
          });
        } else {
          this.restapiService.save(this.projectForm.value).subscribe({
            next: (response) => this.openSnackBar("Project posted successfully"),
            error: (error) => this.openSnackBar("Project posted failed"),
          });
        }        
    }
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, "OK", {
      duration: 2000,
    });
  }

  addNewTag(newTag: string){
    newTag = newTag.trim();
    var unique = !this.tags?.some(x => x.toLowerCase() == newTag.toLowerCase());
    
    if (unique&&newTag!=""){
      this.vaidTag = true;
      this.tags?.push(newTag);
    } else if (newTag==""){
      this.vaidTag = false;
      this.tagerror ="Tag can not be blank."
    } else {
      this.vaidTag = false;
      this.tagerror ="Tag already listed."
    }
  }

}

function skillsList(skills: string[]): any {

  if(skills!=null){
    if(skills.length>1){
      return skills.join(", ");
    } else if(skills.length==1) {
      return skills[0];
    } else{
      return null;
    }
  }
        
}

function skillEdit(skills: string ): string[] {
    
  if(skills !==null){  
    return skills.split(", ");
  }
  return [];
 
}

