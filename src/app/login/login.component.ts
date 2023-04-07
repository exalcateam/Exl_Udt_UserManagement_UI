import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../Models/User';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private _router: Router, private _storageS: StorageService, private fb: FormBuilder) {

    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      passWord: ['', Validators.required]
    });
  }



  // login() {

  //   if (this.loginForm.valid) {
  //     for (let i = 0; i < this._storageS.users.length; i++) {
  //       if (this._storageS.users[i].userName === this.loginForm.get('userName')?.value && this._storageS.users[i].login === "admin") {
  //         if (this._storageS.users[i].passWord === this.loginForm.get('passWord')?.value) {
  //           localStorage.setItem('name', this.loginForm.get('userName')?.value);
  //           localStorage.setItem('fullName', this._storageS.users[i].name);
  //           localStorage.setItem('email', this._storageS.users[i].email);

  //           alert('Login Successfully');
  //           // this._router.navigate(['/dept'],{queryParams:{user:this.loginForm.get('userName')?.value}});
  //           this._storageS.show(true);
  //           localStorage.setItem('type', 'admin');



  //           this._router.navigate(['/dashboard'], { queryParams: { userName: this.loginForm.get('userName')?.value } });

  //         }
  //         else {
  //           alert("Invalid Password");
  //           console.log("Invalid Password");
  //         }
  //       }
  //       else if (this._storageS.users[i].userName === this.loginForm.get('userName')?.value && this._storageS.users[i].login === "user") {
  //         if (this._storageS.users[i].passWord === this.loginForm.get('passWord')?.value) {
  //           localStorage.setItem('name', this.loginForm.get('userName')?.value);
  //           localStorage.setItem('fullName', this._storageS.users[i].name);
  //           localStorage.setItem('email', this._storageS.users[i].email);
  //           alert('Login Successfully');
  //           this._storageS.show(true);
  //           localStorage.setItem('type', 'user');
  //           this._router.navigate(['/dashboard'], { queryParams: { userName: this.loginForm.get('userName')?.value } });


  //         }
  //         else {
  //           alert("Invalid Password");
  //           console.log("Invalid Password");
  //         }
  //       }


  //     }
  //   }
  //   else {
  //     console.log('InValid');
  //     alert('Invalid Username or Password');
  //     this.loginForm.markAllAsTouched();
      
  //   }
  // }
 
  login2(){
    this._storageS.login(this.loginForm.value).subscribe(data=>{
      if(data !=null)
      {    
      localStorage.setItem('Data',JSON.stringify(data));
       
      localStorage.setItem('Name',data.Name);
      localStorage.setItem('Email',data.Email);
      localStorage.setItem('Emp_ID',data.Emp_ID);
      localStorage.setItem('Type',data.Type);
      localStorage.setItem('Username',data.Username);
      this._storageS.show(true);
      this._router.navigate(['/dashboard']);   
      }
      else
      alert("Invalid input") 
    });
  } 
  ngOnInit(): void {
    this._storageS.show(false); 
}
 
}
