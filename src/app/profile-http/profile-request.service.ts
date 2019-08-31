// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import {environment } from '../../environments/environment';
// import {Profile} from "../profile"
// import {Belongings} from "../belongings"

// @Injectable({
//   providedIn: 'root'
// })
// export class ProfileRequestService {
  
//   profile: Profile;
//   userinfo:string = "";
//   cece: any;
//   belongings: Belongings[];

//   constructor(private http:HttpClient) {
//     this.profile =  new Profile ("","",0,0,0,"");
//     this.belongings= [];
//    }

//    profileRequest(){
//     interface sangwa{
//       name:string;
//       email: string;
//       repo: number;
//       followers: number;
//       following:number;
//       bio: string;
      
//     }



    // <p> Name: {{cece.name}}</p>
    // <p>Email:{{cece.email}}</p>
    // <p>Number of repositories: {{cece.public_repos}}</p>
    // <p>Followers: {{cece.followers}}</p>
    // <p>Following: {{cece.following}}</p>
    // <p>Created on: {{cece.created_at|date}}</p>
    // <p>Bio: {{cece.bio}}</p>


// find() {

  // let promise = new Promise ((resolve,reject) =>{
  //   this.http.get<sangwa>("https://api.github.com/users/" + this.userinfo +  "?access_token="+ environment.apiUrl).toPromise().then(cece=>{
  //     this.cece.login = cece.name;
  //     this.cece.email = cece.email;
  //     this.cece.public_repos = cece.repo;
  //     this.cece.followers = cece.followers;
  //     this.cece.following = cece.following;
  //     this.cece.bio= cece.bio;
  //     console.log(this.cece)
  //     resolve()
  // }, 
  // error=>{
  //   this.profile.name="pls rewrite the url"
  //   this.profile.email="verify"
  //   reject()
  // }
// )
//   })
// } 

// }
// }