import { Component, OnInit, EventEmitter, Inject, inject, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})

  export class EditUserComponent implements OnInit {
   
    addUser=this._storageS.addUser;
    constructor(
      private _fb: FormBuilder,
      public _storageS: StorageService,
      private dialog: MatDialogRef<EditUserComponent>,
      @Inject(MAT_DIALOG_DATA) data: any)
       {
        console.log(data)
      this.addUser=_fb.group({
         data
      });
      
       }
      
    ngOnInit(): void {
      
    }
}
