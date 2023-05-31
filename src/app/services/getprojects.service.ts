import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetprojectsService {

  constructor() { }
  getData(){
    return [
      {
        title:"UMKC Capstone Project", 
        github:"https://github.com/451R-Team-Japn/Firebase2",
        site:"https://japn-a71a1.firebaseapp.com/",
        skills:"HTML, CSS, Bootstrap, JavaScript, jQuery, DataTables, Node.js, Cloud Firestore, and Jira",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo."
      },
      {
        title:"React SOS Game", 
        github:"https://github.com/Ambrgna/SOS", 
        site:"https://ambrgna.github.io/SOS/",
        skills:"HTML, CSS, JavaScript, React, Bootstrap",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo."
      },
      {
        title:"Color Compare Tool", 
        github:"https://github.com/ColorAssist/Java-Demo", 
        skills:"Java, Junit",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo."
      }
    ]
  }
}