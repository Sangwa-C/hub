import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile} from "../profile"

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.css']
})
export class HubComponent implements OnInit {

  profile:Profile;


  constructor( private http:HttpClient) {

   }

  ngOnInit() {
    interface sangwa{
      name:string;
      email: string;
      public_repos: number;
      followers: number;
      following:number;
      bio: string;
    }
    this.http.get<sangwa>("https://api.github.com/users/daneden?access_token=722ab6bdea3292c79cf883db4973b22c4c715f50").subscribe(data=>{
      // Succesful API request
      this.profile = new Profile(data.name, data.email, data.public_repos, data.followers, data.following, data.bio)
    })
  }

}
