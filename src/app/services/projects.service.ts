import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Project } from '../model/project';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

@Injectable()
export class ProjectsService {

  projectsUrl: string = 'http://localhost:9080/projects';
    
  tags : Set<string> = new Set<string>();

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl);
  }

  public save(project: Project) {
    return this.http.post<Project>(this.projectsUrl, project);
  }
}