import { Component, OnInit } from '@angular/core';
import { Route,Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{


  username:any=""
  password:any="";
  x:any;

  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit(): void {
  }

 
    validate()
    {
    if(this.username=='' && this.password=="")
    {
      window.alert("Please enter Username and Password")
    }
    else if(this.username=='')
    {
      window.alert("Please enter Customer-Id")
    }
    else if(this.password=='')
    {
      window.alert("Please enter Password")
    }
    else
    {
      if(this.username=="kamal" && this.password=="123")
      {
        this.route.navigate(["/upload"]);
      }
      else if(this.username!="kamal")
      {
        window.alert("Username is incorrect");
      }
      else if(this.password!="123")
      {
        window.alert("Password is incorrect");
      }

      
    }

    }

    myFunction()
    {
      this.x = document.getElementById("myInput");
      if (this.x.type === "password") {
        this.x.type = "text";
      } else {
        this.x.type = "password";
      }
    }

}
