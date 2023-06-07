import { Injectable } from "@angular/core";

@Injectable()
export class User {
    uid: number = 0;
    username: string = "";
    password: string ="";
    role: string="";

    set setid(id:number){
        this.uid = id;
    }
    
    get getid(){
        return this.uid;
    }

}
