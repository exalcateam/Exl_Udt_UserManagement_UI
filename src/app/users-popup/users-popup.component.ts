import { Dialog } from '@angular/cdk/dialog';
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StorageService } from '../services/storage.service';



@Component({
  selector: 'app-users-popup',
  templateUrl: './users-popup.component.html',
  styleUrls: ['./users-popup.component.scss']
})
export class UsersPopupComponent {
  addUser: any;
   isEdit:boolean=true;
  constructor(
    private fb: FormBuilder,
    public _storageS: StorageService,
    private dialog: MatDialogRef<UsersPopupComponent>,
    @Inject (MAT_DIALOG_DATA) data:any
  ) {
    this.addUser=_storageS.addUser;
     if(data)
    {
      this.addUser=fb.group(data);
      this.isEdit=false;
    }
  }

}
