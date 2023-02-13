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
 name : string = "" 
 file: any;
 timeline:any
 data:any



getValue(timeline:any)
{
  this.timeline= timeline;
}

getFile(event:any)
{
  this.file=event.target.files[0]
  console.log(this.file)


}


submitData()
{
  
  var  formData = new FormData();
  formData.set("file",this.file)
  formData.set("number",this.timeline)
  console.log(this.timeline)
  this.http.post('http://localhost:5000/api/upload',formData, {responseType: 'text'}).subscribe((response)=>
  {
    console.log(response)
  });
  window.alert("File Uploaded Successfully!")
}
nextpage()
{
  this.router.navigate(["/visual"]);
}
}
