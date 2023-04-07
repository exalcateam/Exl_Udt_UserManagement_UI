import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AddDeptComponent } from '../add-dept/add-dept.component';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tamil',
  templateUrl: './tamil.component.html',
  styleUrls: ['./tamil.component.scss']
})
export class TamilComponent {
constructor(private _storageS:StorageService, private dialog:MatDialog, private route:Router){

}
data=this._storageS.data;
cols=['no','ticket_Id','task','person','assign','open','status','edit']
dataSource=new MatTableDataSource(this.data);

 

edit(user:any,i:any){
  this._storageS.oldPersons.push(user.person)

  console.log(user)
  this._storageS.oldPerson.push(user);
  
  
 
  const dialogConfig=new MatDialogConfig();
  dialogConfig.data=user;
  const e=this.dialog.open(AddDeptComponent,dialogConfig);
  e.afterClosed().subscribe((name) => {
    let date=new Date();
    this._storageS.data[i].newDate=date;
    this._storageS.dates.push({name,date});
    this._storageS.ds_dates=new MatTableDataSource(this._storageS.dates);
    if (name) {
      this.data[i].person = name;
         
      this._storageS.newchangeName=name;

      
      // this._storageS.data.forEach(user => {
      //   ((user.person==name)) ? this._storageS.newPerson.push(user) : {};
      //   this._storageS.ds_newPerson=new MatTableDataSource(this._storageS.newPerson);
      // });



      
      
    }
  });
}
next(){
 
this.route.navigate(['/practice']);
}

}
