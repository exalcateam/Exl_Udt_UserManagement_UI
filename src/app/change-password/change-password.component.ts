import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  cp:FormGroup;
  constructor(private fb:FormBuilder, private _storageS:StorageService, private router:Router){
    this.cp=this.fb.group({
      
       pwd:[''],
       newPwd:[''],
       cnewPwd:['']

    });
  }
  userName=localStorage.getItem('Username');
submit(){
   
  for(let i=0;i<this._storageS.users.length;i++){
    if(this.cp.get('pwd')?.value===this._storageS.users[i].passWord && this.userName===this._storageS.users[i].userName){
      if(this.cp.get('newPwd')?.value===this.cp.get('cnewPwd')?.value){
        this._storageS.users[i].passWord=this.cp.get('cnewPwd')?.value;
        this.router.navigate(['login']);
      }
    }
  }
  
}}
