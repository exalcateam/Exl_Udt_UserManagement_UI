import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  fp: FormGroup;
  constructor(private route: Router, private fb: FormBuilder, private _storageS: StorageService) {
    _storageS.show(false)
    this.fp = this.fb.group({
      userName: ['', Validators.required],
      otp: ['', Validators.required],
      pwd: ['', Validators.required],
      cpwd: ['', Validators.required]
    });
  }
  submit() {
    if (this.fp.valid) {
      for (let i = 0; i < this._storageS.users.length; i++) {
        if (this.fp.get('userName')?.value === this._storageS.users[i].userName && 
        this.fp.get('otp')?.value === "000000" && 
        this.fp.get('pwd')?.value === this.fp.get('cpwd')?.value )
         {
              this._storageS.users[i].passWord = this.fp.get('cpwd')?.value;
              this.route.navigate(['/login']);
        } 
      }

    }
    // this._storageS.users.forEach(user=>{
    //   user.userName == this.fp.get('userName')?.value && (this.fp.get('otp')?.value === "000000" && 
    //   this.fp.get('pwd')?.value === this.fp.get('cpwd')?.value) ? this.route.navigate(['/login'])  : this.fp.markAllAsTouched;
    // });

  }
}
