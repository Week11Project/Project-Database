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

  projectForm!: FormGroup;


  constructor(private projectsService: ProjectsService, private formBuilder: FormBuilder) {
    this.projectsService.findAll().subscribe((data) => {
      const t : Set<string> = new Set<string>();
      
      data.forEach(project => project.skills?.split(", ").forEach(s => t.add(s)));

      this.tags = Array.from(t.values());
    });
    this.projectForm=this.formBuilder.group({
      title: '',
      github: '',
      site: '',
      description: ''
    });
  }

  // powers = ['Really Smart', 'Super Flexible',
  //           'Super Hot', 'Weather Changer'];

  // model = new Project('Dr. IQ', 'Dr. IQ', this.powers[0], 'Chuck Overstreet','Dr. IQ');

  // submitted = false;

  onSubmit() { 
    
    if(this.projectForm.value.title!==undefined){    
      let body = new FormData();
        
        this.projectsService.save(this.projectForm.value);}
    
  }
  
  onChange(event: any){
    }

}
