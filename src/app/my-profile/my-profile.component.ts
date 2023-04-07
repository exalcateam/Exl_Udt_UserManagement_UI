import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  constructor(private fb: FormBuilder, public route: Router, public _storageS: StorageService) {
    this.myProfile=localStorage.getItem('Data');
    this.details=(JSON.parse(this.myProfile))
  }
  
myProfile:any;
details:any;
  ngOnInit(): void {
      
     
    
  }
  cp:boolean=false;
  changePassword(){
    this.cp=true;
  }
}
