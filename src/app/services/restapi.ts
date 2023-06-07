import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Project } from '../model/project';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

@Injectable()
export class RestapiService {

  projectsUrl: string = 'http://localhost:9080/projects';
    
  tags : Set<string> = new Set<string>();
  headers:any;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({Authorization: 'Basic '+sessionStorage.getItem("headers")});
  }

  public findAll(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl);
  }

  public save(project: Project) {
    return this.http.post(this.projectsUrl, project, { headers: this.headers});
  }

  public delete(id:number) {
    return this.http.delete(this.projectsUrl+"/"+id, { headers: this.headers, responseType: 'text'});
  }
}