import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent{
  @Input() tags?: string[];
  control = new FormControl();
  isClose?: boolean;
  valueSelected?: string;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  // constructor(private projectsService: ProjectsService) {
  //   this.projectsService.findAll().subscribe((data) => {
  //     const t : Set<string> = new Set<string>()
  //     data.forEach(project => project.skills?.split(", ").forEach(s => t.add(s), this));
  //     this.tags = Array.from(t.values());
      
  //   });
  // }
  
  // constructor(private projectsService: ProjectsService) {
  //   this.projectsService.findAll().subscribe((data) => {
  //     this.projects = data;
  //   });
  // }
    
  // constructor() {
  //     const t : Set<string> = new Set<string>()
  //     alert(this.projects);
  //     this.projects?.forEach(project => project.skills?.split(", ").forEach(s => t.add(s), this));
  //     this.tags = Array.from(t.values());
  //     alert(t);
  // }
  onChange(event: any){
    this.isClose = false;
    if(!event) {
      this.isClose = true;
      this.valueSelected = this.control.value && this.control.value.toString();
      // if(this.valueSelected==""){
      //   alert(this.tags);
      //   this.valueSelected = this.tags?.toString();
      // }
      this.sendValueSelected();
    }
  }
  sendValueSelected(): void {
    this.notify.emit(this.valueSelected);
  }
}