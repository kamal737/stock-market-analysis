import { Component, OnInit } from '@angular/core';
import { Route,Router } from '@angular/router';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';


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
  gotp:any=""
  lotp:any=""
  json2:any;
  result:any

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

    getOtp()
    {
      this.lotp = 0;
      var digits = '0123456789';
    
      for(let i=0;i<6;i++)
      {
        this.lotp += digits[Math.floor(Math.random()*10)]
      }
      console.log(this.lotp);
      window.alert("OTP SENT SUCCESSFULLY")
      var  formData = new FormData();
      formData.set("otp",this.lotp)
      this.http.post('http://localhost:5000/api/otp',formData,{responseType:'json'}).subscribe((response)=>
     {
     
        this.result = response
        console.log(this.result)
     })
    //  (error:HttpErrorResponse)=>
    //  {
    //   this.result = error;
    //   window.alert("Error Occured!Kindly ensure that the backend is running or the backend code has some issues")
    //  })
  
      return this.lotp
  
    }

}
