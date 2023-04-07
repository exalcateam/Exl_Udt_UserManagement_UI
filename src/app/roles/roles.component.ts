import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddDeptComponent } from '../add-dept/add-dept.component';
import { StorageService } from '../services/storage.service';
import { ShowUserComponent } from '../show-user/show-user.component';
 

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent {
  
  constructor(private _storageS:StorageService, private dialog:MatDialog){
    _storageS.GetRole().subscribe(data=>{
    this.roles=data;
    });
  }
  roles:any;
  cols = ['dept', 'users'];
  ds=new MatTableDataSource;
 
  addRole(){
    const x = this.dialog.open(AddDeptComponent);
    
    x.afterClosed().subscribe((data) => {
      if (data) this.roles.push(data);
    });
  }
  selectedRole:any;
  selectRole(role:any){
    this.selectedRole=role;
    let roleMembers:any[]=[];

    this._storageS.ShowUser(this.selectedRole).subscribe(data=>{
      this.ds=new MatTableDataSource(data);
    })

    // this._storageS.users.forEach(user=>{
    //   user.role == role ? roleMembers.push(user) : {};
    //   this.ds=new MatTableDataSource(roleMembers);
    // })
  }

  showUserDetails(data: any) {
    const dialogConfig = new MatDialogConfig;
    dialogConfig.data = data;
    dialogConfig.disableClose = true;
    this.dialog.open(ShowUserComponent, dialogConfig);
  }
}
