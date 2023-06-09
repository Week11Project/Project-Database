import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { AddComponent } from './components/add/add.component';
import {LoginComponent} from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { UsersComponent } from './components/users/users.component';
import {SignupComponent} from './components/signup/signup.component';

const routes: Routes = [
  {path: '' , redirectTo: 'main/home', pathMatch: 'full'},
  {path: 'login', component:LoginComponent},
  {path: 'home', redirectTo: 'main/home'},
  {path: 'signup', component: SignupComponent},
  {
    path: 'main', component:MainComponent,
    children: [
      {
        path: 'home',
        component: UsersComponent,
      },
      {
        path: 'projects/:userid',
        component: ProjectsComponent,
      },
      {
        path: 'add',
        component: AddComponent,
      },
      {
        path: 'edit/:projectid',
        component: AddComponent,
      },

    ],
  }
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
