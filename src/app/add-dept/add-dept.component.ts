import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-add-dept',
  templateUrl: './add-dept.component.html',
  styleUrls: ['./add-dept.component.scss']
})
export class AddDeptComponent {
constructor(private dialog: MatDialogRef<AddDeptComponent>,
  @Inject(MAT_DIALOG_DATA) data: any,
  private _storageS:StorageService){
 
   
 
  // _storageS.oldPerson.push(data);
  // _storageS.ds_oldPerson=new MatTableDataSource(_storageS.oldPerson);
  // console.log(_storageS.oldPerson);
}

 temp(name){

 }
}
