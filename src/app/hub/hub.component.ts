import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile} from "../profile"
// import { ProfileRequestService} from "../profile-http/profile-request.service"

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.css']
})
export class HubComponent implements OnInit {

  profile:Profile;
  userinfo:string = "";
  cece: any;

  // constructor( private profileService:ProfileRequestService ) {

  //  }

  // ngOnInit() {

  //   this.profileService.profileRequest()
  //   this.profile = this.profileService.profile
// }

  constructor(private http:HttpClient) {
   }

   ngOnInit() {
    // interface sangwa{
    //   name:string;
    //   email: string;
    //   public_repos: number;
    //   followers: number;
    //   following:number;
    //   bio: string;
    // }
  }

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
// }


  
  // this.http.get<sangwa>("https://api.github.com/users/Sangwa-C?access_token=722ab6bdea3292c79cf883db4973b22c4c715f50").subscribe(data=>{
  //     // Succesful API request
  //     this.profile = new Profile(data.name, data.email, data.public_repos, data.followers, data.following, data.bio)
  //   }
  }