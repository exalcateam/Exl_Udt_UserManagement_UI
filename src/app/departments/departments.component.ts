import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { EMPTY } from 'rxjs';
import { AddDeptComponent } from '../add-dept/add-dept.component';
import { StorageService } from '../services/storage.service';
import { ShowUserComponent } from '../show-user/show-user.component';
@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
type=localStorage.getItem('type');
  constructor(
    private _activateRoute: ActivatedRoute,
    private _storageS: StorageService,
    private dialog: MatDialog,

  ) {
   _storageS.GetDepartments().subscribe(data=>{
    this.dept=data;
   })
  }

   
  username: any;
  ngOnInit(): void {
    this.username = localStorage.getItem('name');
  }
  dept:any;

  cols = ['role', 'users'];

  selectedDepartment: any;

  ds = new MatTableDataSource;

  selectDepartment(department: string) {

    // this.selectedDepartmentDetails.splice(0);
    // this.ds = new MatTableDataSource(this.selectedDepartmentDetails);

    // this.selectedDepartment = this.dept[index];

    // for (let i = 0; i < this._storageS.users.length; i++) {
    //   if (this._storageS.users[i].dept === this.selectedDepartment) {
    //     this.selectedDepartmentDetails.push(this._storageS.users[i]);
    //     this.ds = new MatTableDataSource(this.selectedDepartmentDetails);
    //   }

    // }

    this.selectedDepartment = department;
  

    this._storageS.ShowUser(this.selectedDepartment).subscribe(data=>{
      this.ds=new MatTableDataSource(data);
    })
    
    // this._storageS.users.forEach(user => {
    //   user.dept == department ? deptMembers.push(user) : {};
    // });
    // this.ds = new MatTableDataSource(deptMembers);
  }



  addDept(): void {
    const x = this.dialog.open(AddDeptComponent);
    
    x.afterClosed().subscribe((data) => {
      if (data) this.dept.push(data);
    });
  }


  showUserDetails(data: any) {
    const dialogConfig = new MatDialogConfig;
    dialogConfig.data = data;
    dialogConfig.disableClose = true;
    this.dialog.open(ShowUserComponent, dialogConfig);

  }

   
}
