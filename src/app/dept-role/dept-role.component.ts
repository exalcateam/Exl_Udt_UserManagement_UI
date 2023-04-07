import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddDeptComponent } from '../add-dept/add-dept.component';
import { StorageService } from '../services/storage.service';
import { ShowUserComponent } from '../show-user/show-user.component';

@Component({
  selector: 'app-dept-role',
  templateUrl: './dept-role.component.html',
  styleUrls: ['./dept-role.component.scss']
})
export class DeptRoleComponent {

  constructor(private _storageS:StorageService, private dialog:MatDialog){
    console.log(_storageS.x);
    console.log(_storageS.cols);
    const x=localStorage.getItem('type');
    if(x==="Department")
    {
      this.deptRole=_storageS.dept;
    }
    else if(x==="Role")
    {
      this.deptRole=_storageS.roles;
    }
  }
  x=localStorage.getItem('type');
    deptRole:any;
     
  cols=this._storageS.cols;
  rows=['role','dept','users'];
  add(){
    const x = this.dialog.open(AddDeptComponent);
    
    x.afterClosed().subscribe((data) => {
      if (data) this.deptRole.push(data);
    });
  }
 
  ds=new MatTableDataSource;
  selected:any;

  select( val:any){
    this.selected=val;
    let members:any[]=[];
    this._storageS.users.forEach((user)=>{
      user.dept==val || user.role==val ? members.push(user) : {};
       
      this.ds=new MatTableDataSource(members);
    });
  }

  showUserDetails(data:any){
    const dialogConfig = new MatDialogConfig;
    dialogConfig.data = data;
    dialogConfig.disableClose = true;
    this.dialog.open(ShowUserComponent, dialogConfig);
  }

}
