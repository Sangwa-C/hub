import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';
import {Profile} from "../profile"

@Injectable({
  providedIn: 'root'
})
export class ProfileRequestService {
  
  profile: Profile;
  userinfo:string = "";
  cece: any;

  constructor(private http:HttpClient) {
//     this.profile =  new Profile ("","",0,0,0,"")
   }

//    profileRequest(){
//     interface sangwa{
//       name:string;
//       email: string;
//       public_repos: number;
//       followers: number;
//       following:number;
//       bio: string;
//     }


find() {
  let promise = new Promise ((resolve,reject) =>{
    this.http.get("https://api.github.com/users/" + this.userinfo +  "?access_token=722ab6bdea3292c79cf883db4973b22c4c715f50")
    .subscribe(cece=>{
      this.cece = cece;
      console.log(this.cece)
      resolve()
  }, 
  error=>{
    this.profile.name="pls rewrite the url"
    this.profile.email="verify"
    reject()
  }
)
  })
} 



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
}
