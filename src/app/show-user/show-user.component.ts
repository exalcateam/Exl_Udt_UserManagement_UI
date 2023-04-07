import { Component,Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.scss']
})
export class ShowUserComponent {
details: any;
   
  constructor(
    private _storageS:StorageService,
    private dialog: MatDialogRef<ShowUserComponent>,
    @Inject(MAT_DIALOG_DATA) data: any){
      
      this.details=data;
       
  }
   
}
