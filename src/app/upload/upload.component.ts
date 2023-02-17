import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';



@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  username:any="";
  time:any;
  stock:any="";
  sdate:any="";
  edate:any=""

  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get("http://localhost:5000/api/login",{responseType:'text'}).subscribe((data)=>
    {
      console.log(data)
      this.username=data
      let date: Date = new Date();  
      this.time=date;
    });
    
  }





submitData()
{
  
  var  formData = new FormData();
  formData.set("stock",this.stock)
  formData.set("sdate",this.sdate);
  formData.set("edate",this.edate);
  this.http.post('http://localhost:5000/api/upload',formData, {responseType: 'text'}).subscribe((response)=>
  {
    console.log(response)
  });
  window.alert("Data Uploaded Successfully!")
}
nextpage()
{
  this.router.navigate(["/plot"]);
}
}
