import { HttpClient, HttpHeaders, HttpResponseBase } from '@angular/common/http';
import { ReadPropExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route,Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ProserviceService } from '../proservice.service';

@Component({
  selector: 'app-pyro',
  templateUrl: './pyro.component.html',
  styleUrls: ['./pyro.component.css']
})
export class PyroComponent implements OnInit {

  pyro:any=FormGroup;
  data: any;
  url = 'http://localhost:5000/api/home'
  constructor(private http: HttpClient,private fb:FormBuilder,private route: Router,private ps:ProserviceService,private snb:MatSnackBar) { }
   

  ngOnInit(): void {
    this.pyro = this.fb.group(
      {
        engSent:' ',
        response:' '
      }
    )
  }

  onsubmit(data: any) {
    let param={
      engSent:data.engSent
    }
    
    console.log(param)
    this.http.post(this.url,param).subscribe((response:any)=>{
      console.log(response.data)
      this.data = response.data;
    })
    this.snb.open('Data sent through api', 'close', {duration: 3000});
    console.log('data sent')
    console.log(this.pyro);
  }

}

