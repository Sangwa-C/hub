// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import {environment } from '../../environments/environment';
// import {Profile} from "../profile"

// @Injectable({
//   providedIn: 'root'
// })
// export class ProfileRequestService {
  
//   profile: Profile;

//   constructor(private http:HttpClient) {
//     this.profile =  new Profile ("","",0,0,0,"")
//    }

//    profileRequest(){
//     interface sangwa{
//       name:string;
//       email: string;
//       public_repos: number;
//       followers: number;
//       following:number;
//       bio: string;
//     }

//     let promise = new Promise((resolve,reject)=>{
//       this.http.get<sangwa>(environment.apiUrl).toPromise().then(response=>{
//         this.profile.name = response.name
//         this.profile.email = response.email
//         this.profile.repo = response.public_repos
//         this.profile.followers = response.followers
//         this.profile.following = response.following
//         this.profile.bio = response.bio

//         resolve()

//             },
//             error=>{
//               this.profile.name= "Sangwa"
//               this.profile.email= "response.email"
//               this.profile.repo = 1
//               this.profile.followers = 1
//               this.profile.following = 1
//               this.profile.bio = "response.bio"
      
//               reject(error)
//         })
//       })
//       return promise  
//   }
// }
