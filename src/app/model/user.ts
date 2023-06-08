import { Injectable } from "@angular/core";

@Injectable()
export class User {
    user_id: number = 0;
    username: string = "";
    password: string ="";
    role: string="";

    set setid(id:number){
        this.user_id = id;
    }
    
    get getid(){
        return this.user_id;
    }

}
