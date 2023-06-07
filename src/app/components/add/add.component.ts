import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Project } from 'src/app/model/project';
import { RestapiService } from 'src/app/services/restapi';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  @Input() tags?: string[];
  control = new FormControl();
  
  newTag: string ="";

  projectForm!: FormGroup;
  
  vaidTag : boolean = true;
  tagerror : string ="";
  p: Project | undefined;


  constructor(private restapiService: RestapiService, private formBuilder: FormBuilder) {
    this.restapiService.findAll().subscribe((data) => {
      const t : Set<string> = new Set<string>();
      
      data.forEach(project => project.skills?.split(", ").forEach(s => t.add(s)));

      this.tags = Array.from(t.values());
    });
    const urlreg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

    
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

  onSubmit() { 
    
    if(this.projectForm.value!==undefined){    
      
        this.projectForm.value.skills = skillsList(this.projectForm.value.skills);

      this.restapiService.save(this.projectForm.value);}
    
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
  
  onChange(event: any){
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

