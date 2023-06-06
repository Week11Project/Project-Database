import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { AddComponent } from './components/add/add.component';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
  // {path: '' , redirectTo: 'login', pathMatch: 'full'},
  { path: 'projects', component: ProjectsComponent},
  { path: 'add', component: AddComponent },
  {path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  // projects?: Project[];
  // filteredProjects?: Project[];
  // tags?: string[];

  // constructor(private projectsService: ProjectsService) {
  //   this.projectsService.findAll().subscribe((data) => {
  //     const t : Set<string> = new Set<string>();

  //     this.projects = data;
  //     this.filteredProjects = [...this.projects];

  //     this.projects?.forEach(project => project.skills?.split(", ").forEach(s => t.add(s)));

  //     this.tags = Array.from(t.values());
  //   });
  // }
 }
