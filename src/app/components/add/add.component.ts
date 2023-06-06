import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Project } from 'src/app/model/project';
import { ProjectsService } from 'src/app/services/projects.service';
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


  constructor(private projectsService: ProjectsService, private formBuilder: FormBuilder) {
    this.projectsService.findAll().subscribe((data) => {
      const t : Set<string> = new Set<string>();
      
      data.forEach(project => project.skills?.split(", ").forEach(s => t.add(s)));

      this.tags = Array.from(t.values());
    });
    this.projectForm=this.formBuilder.group({
      title: '',
      skills: '',
      github: null,
      site: null,
      description: ''
    });
  }

  onSubmit() { 
    
    if(this.projectForm.value.title!==undefined){    
      
        console.log(this.projectForm.value.skills);
        this.projectForm.value.skills = skillsList(this.projectForm.value.skills);
        console.log(this.projectForm.value.skills);

      this.projectsService.save(this.projectForm.value);}
    
  }

  addNewTag(newTag: string){
    newTag = newTag.trim();
    var unique = !this.tags?.some(x => x.toLowerCase() == newTag.toLowerCase());
    // this.tags?.map((t) => { return t.toLowerCase() }).includes(newTag.toLowerCase())
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
  if(skills.length>1){
    return skills.join(", ");
  } else if(skills.length==1) {
    return skills[0];
  } else{
    return null;
  }
        
}

