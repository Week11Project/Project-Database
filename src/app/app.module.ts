import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NavComponent } from './components/nav/nav.component';
import { ProjectComponent } from './components/project/project.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterComponent } from './components/filter/filter.component';
import { RestapiService } from './services/restapi';
import {RestapiLoginService} from './services/restapi-login.service';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './components/add/add.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import {SignupComponent} from './components/signup/signup.component'

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    NavComponent,
    ProjectComponent,
    FooterComponent,
    FilterComponent,
    AddComponent,
    LoginComponent,
    MainComponent,
    UsersComponent,
    UserComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [RestapiService, RestapiLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
