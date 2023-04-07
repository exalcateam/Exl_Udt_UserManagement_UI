import { Component ,OnInit, OnChanges, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy  {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private _storageS:StorageService, private route:Router, private _activateRoute:ActivatedRoute){
    _storageS.getUsers().subscribe(data=>{
      _storageS.userDetails=data;
    })
  }

 
 
 
  ngOnDestroy(): void {
    
  }
 
  ngOnInit(): void {
     
     this._storageS.valueEmitter.subscribe((value)=>{
      this.showToolbar=value;
     });

     this._activateRoute.queryParams.subscribe(data=>{
      this.uname=data['userName'];
       this._storageS.users.forEach(user => {
        if(user.userName==this.uname){
          
        }
        
       });
     })
  }

  logout(){
 
    localStorage.removeItem('type');
     this.route.navigate(['/login']);
  }

  showToolbar:boolean=true;
 
 uname:any;
 name=localStorage.getItem('Name');
 email=localStorage.getItem('Email');
}
