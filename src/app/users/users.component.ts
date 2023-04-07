import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { FormArray, FormBuilder, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { UsersPopupComponent } from '../users-popup/users-popup.component';
import { StorageService } from '../services/storage.service';
import { DialogConfig } from '@angular/cdk/dialog';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import * as XLSX from 'xlsx';
import { User } from '../Models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {


  constructor(private fb: FormBuilder,
    public _dialog: MatDialog,
    private _storageS: StorageService,
  
  ) {
    this.type=_storageS.type;
    _storageS.getUsers().subscribe(data => {
      
      this.users = data;
      this.dataSource = new MatTableDataSource(this.users)
    });

    
    
  }

  type:any;
  //show columns in mat-table
  cols = ['Emp_ID', 'name', 'email', 'mobile', 'dob', 'dept', 'role', 'edit', 'delete'];

  //user details and datasource
  users: any = [];
  dataSource = new MatTableDataSource(this.users);

  //filter the table
  filter(searchText: string) {
    this.dataSource.filter = searchText.trim().toLowerCase();
    console.log(searchText);
  }

  //add user details
  add() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;


    const dialogRef = this._dialog.open(UsersPopupComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this._storageS.newUser(data).subscribe(data => {
          this._storageS.getUsers().subscribe(data => {
            this.dataSource = new MatTableDataSource(data);
          })
        })
      }
    });
  }

  //edit user details
  edit(edit: any, i: any) {

   
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = edit;

    const e = this._dialog.open(UsersPopupComponent, dialogConfig);
    e.afterClosed().subscribe((data) => {
      if (data) {
        this._storageS.updateUser(data).subscribe(data => {
          this._storageS.getUsers().subscribe(x => {
            this.dataSource = new MatTableDataSource(x);
          })
        });

      }
    });
  }

  //delete the user details
  delete(Emp_ID) {
    this._storageS.DeleteUser(Emp_ID).subscribe(data => {
      this._storageS.getUsers().subscribe(x => {
        this.dataSource = new MatTableDataSource(x);
      });
    })
  }

  //download as xlsx file
  download() {
    //const table=document.getElementById('table')
    const table = document.querySelector('table');
    const workSheet = XLSX.utils.table_to_sheet(table);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, 'Sheet1');
    const fileName = 'users.xlsx';
    XLSX.writeFile(workBook, fileName);
  }

  //upload the xlsx file and show
  upload(event: any) {
    console.log("HI")
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {

      if (e.target) {


        const data = new Uint8Array(e.target.result);
        const workBook = XLSX.read(data, { type: 'array' });
        const workSheet = workBook.Sheets[workBook.SheetNames[0]];
        const rows: any = XLSX.utils.sheet_to_json(workSheet, { header: 1 });
        const newUsers = rows.slice(1).map(row => ({ name: row[0], email: row[1], mobile: row[2], dob: row[3], dept: row[4], role: row[5] }));

        this.users = [...this.users, ...newUsers];
        this.dataSource = new MatTableDataSource(this.users);
      }
    };
    reader.readAsArrayBuffer(file);


  }



}
