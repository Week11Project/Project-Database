import { Injectable } from "@angular/core";

@Injectable()
export class Project {
    id: number = 0;
    user_id: string = "";
    title: string = "";
    github: string = "";
    site: string = "";
    skills: string = "";
    description: string = "";
    

    // constructor(title: string, github: string, site: string,skills: string, description: string) {
    //     this.title = title;
    //     this.github = github
    //     this.site = site
    //     this.skills = skills;
    //     this.description = description;
    // }
    set setid(id:number){
        this.id = id;
    }

}
