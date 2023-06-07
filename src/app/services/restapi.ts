import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Project } from '../model/project';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

@Injectable()
export class RestapiService {

  projectsUrl: string = 'http://localhost:9080/';
    
  tags : Set<string> = new Set<string>();
  headers:any;
  userid:any;

  constructor(private http: HttpClient) {
    this.userid =sessionStorage.getItem("userid");

    this.headers = new HttpHeaders({Authorization: 'Basic '+sessionStorage.getItem("headers")});
  }

  public findAll(id: string | null | undefined): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl+id+'/projects');
  }

  public find(id:number): Observable<Project> {
    return this.http.get<Project>(this.projectsUrl+"/projects/"+id, { headers: this.headers});
  }


  public save(project: Project) {
    return this.http.post(this.projectsUrl+"projects", project, { headers: this.headers});
  }

  public delete(id:number) {
    return this.http.delete(this.projectsUrl+"/projects/"+id, { headers: this.headers, responseType: 'text'});
  }

  public update(project: Project, id:number) {
    return this.http.put(this.projectsUrl, project, { headers: this.headers});
  }
}