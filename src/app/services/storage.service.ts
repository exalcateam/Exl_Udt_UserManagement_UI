import { NgFor } from '@angular/common';
import { HttpClient , HttpErrorResponse} from '@angular/common/http';
 
import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subject } from 'rxjs';
import { User } from '../Models/User';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  addUser: FormGroup;
  constructor(private fb: FormBuilder, public _httpClient:HttpClient) {
    this.addUser = this.fb.group({
      id:[0],
      Username:[''],
      Password:[''],
      Type:[''],
      Emp_ID:[''],
      Name: ['', Validators.required,],
      Email: ['', Validators.required],
      Phone: [''],
      DOB: [''],
      Department: ['', Validators.required],
      Role: ['', Validators.required],
      photo: [null]
    });
    
   this.getUsers().subscribe(data=>{
     
    this.userDetails=data;
    
   });
  this.GetDepartments().subscribe(data=>{
     this.dept=data;
  });

  
    
  }
//#region HTTP Practice
  url:string = "https://localhost:7044/api/";
 

myProfile:any;
type:boolean=localStorage.getItem('Type') == "Admin";
userDetails:any;
getUsers() : Observable<any>
{
  
  return this._httpClient.get(this.url + "User/GetUsers");
}
login(data) :Observable<any>
{
   
  return this._httpClient.post(this.url+"User/Login",data);
}
getUserByID(Emp_Id) : Observable<any>
{
 
  return this._httpClient.get(this.url + "User/GetUserByID?Emp_ID=",Emp_Id);
}

newUser(newUser:User):Observable<any>
{
  console.log(newUser);
  return this._httpClient.post(this.url + "User/CreateUser",newUser);
}

getById(id:number):Observable<any>
{
  return this._httpClient.get(this.url + "User/GetById/" + id);
}


updateUser(update:User) : Observable<any>
{
 return this._httpClient.put(this.url + "User/UpdateUser" ,update);

}

DeleteUser(Emp_ID):Observable<any>
{
   return this._httpClient.delete<number>(this.url + `User/DeleteUser?Emp_ID=${Emp_ID}`);
    
}

GetDepartments():Observable<any>{
  return this._httpClient.get(this.url+"User/GetDepartments")
}

GetRole():Observable<any>{
  return this._httpClient.get(this.url+"User/GetRoles")
}

ShowUser(value) :Observable<any>
{
  return this._httpClient.post(this.url + `User/ShowUser?Department=${value}`,'Angular');
}

//#endregion

  users = [
    {
      login: 'admin',
      userName: 'Gana@123',
      passWord: 'exalca',
      name: 'Gananathan',
      email: 'gana@exalca.com',
      mobile: '9727596645',
      dob: '03/24/1999',
      dept: 'Angular',
      role: 'Trainer',
      photo: '../../assets/GN.jpg'
    },
    {
      login: 'admin',
      userName: 'Tamil@123',
      passWord: 'exalca',
      name: 'Tamil Selvan',
      email: 'tamil@exalca.com',
      mobile: '8220658441',
      dob: '04/24/1999',
      dept: 'Python',
      role: 'Developer',
      photo: '../../assets/TS.jpg'
    },
    {
      login: 'user',
      userName: 'Mahesh@123',
      passWord: 'exalca',
      name: 'Maheshkumar K',
      email: 'mahesh@exalca.com',
      mobile: '9659005505',
      dob: '06/22/2002',
      dept: 'Angular',
      role: 'Trainee Developer',
      photo: '../../assets/MK.jpg'
    },

    {
      login: 'user',
      userName: 'Joseph@123',
      passWord: 'exalca',
      name: 'Joseph Selvin S',
      email: 'joseph@exalca.com',
      mobile: '9626300402',
      dob: '02/20/2002',
      dept: 'Python',
      role: 'Trainee Developer',
      photo: '../../assets/JS.jpg'
    },
    {
      login: 'user',
      userName: 'Santhosh@123',
      passWord: 'exalca',
      name: 'Santhosh M',
      email: 'santhosh@exalca.com',
      mobile: '9424144114',
      dob: '12/09/2001',
      dept: 'Angular',
      role: 'Trainee Developer',
      photo: '../../assets/MS.jpg'
    }

  ];
  x: any;
  cols: any[] = [];
  dept :any=[];
  roles :any=[];

  ds = new MatTableDataSource(this.users)

  showToolbar: boolean = false;

  valueEmitter = new Subject<boolean>();

  show(val: boolean) {
    this.valueEmitter.next(val);
  }

  tempDate = new Date() ;

  data = [
    {
      no: '1',
      ticket_Id: '4321',
      task: 'AP',
      person: 'Tamil',
      assign: '1/1/2023, 5:19 PM',
      openDate: '2/13/2023, 1:19 PM',
      status: 'open',
      newDate: this.tempDate
    },
    {
      no: '2',
      ticket_Id: '2346',
      task: 'WMS',
      person: 'Gana',
      assign: '1/2/2023, 5:19 PM',
      openDate: '1/27/2023, 1:19 PM',
      status: 'in-progress',
      newDate: this.tempDate
    },
    {
      no: '3',
      ticket_Id: '9999',
      task: 'GST',
      person: 'Karthik',
      assign: '2/13/2023, 5:19 PM',
      openDate: '3/9/2023, 1:19 PM',
      status: 'close',
      newDate: this.tempDate
    },
    {
      no: '4',
      ticket_Id: '5684',
      task: 'DS',
      person: 'Mahesh',
      assign: '1/4/2023, 5:19 PM',
      openDate: '1/30/2023, 1:19 PM',
      status: 'in-progress',
      newDate: this.tempDate
    },
    {
      no: '5',
      ticket_Id: '6875',
      task: 'WMS',
      person: 'Joseph',
      assign: '1/5/2023, 5:19 PM',
      openDate: '2/25/2023, 1:19 PM',
      status: 'open',
      newDate: this.tempDate
    },
    {
      no: '6',
      ticket_Id: '3546',
      task: 'DS',
      person: 'Santhosh',
      assign: '1/6/2023, 5:19 PM',
      openDate: '2/19/2023, 1:19 PM',
      status: 'in-progress',
      newDate: this.tempDate
    },
    {
      no: '7',
      ticket_Id: '9872',
      task: 'AP', 
      person: 'Tamil',
      assign: '1/7/2023, 5:19 PM',
      openDate: '1/23/2023, 1:19 PM',
      status: 'open',
      newDate: this.tempDate
    },
    {
      no: '8',
      ticket_Id: '6969',
      task: 'WMS',
      person: 'Karthik',
      assign: '1/8/2023, 5:19 PM',
      openDate: '2/13/2023, 1:19 PM',
      status: 'in-progress',
      newDate: this.tempDate
    },
    {
      no: '9',
      ticket_Id: '4842',
      task: 'GST', 
      person: 'Santhosh',
      assign: '1/9/2023, 5:19 PM',
      openDate: '2/23/2023, 1:19 PM',
      status: 'open',
      newDate: this.tempDate
    },
    {
      no: '10',
      ticket_Id: '5687',
      task: 'AP',
      person: 'Joseph',
      assign: '1/10/2023, 5:19 PM',
      openDate: '2/27/2023, 1:19 PM',
      status: 'in-progress',
      newDate: this.tempDate
    },
    {
      no: '11',
      ticket_Id: '3474',
      task: 'WMS',
      person: 'Gana',
      assign: '1/11/2023, 5:19 PM',
      openDate: '2/15/2023, 1:19 PM',
      status: 'close',
      newDate: this.tempDate
    },
    {
      no: '12',
      ticket_Id: '9875',
      task: 'DS',
      person: 'Tamil',
      assign: '1/12/2023, 5:19 PM',
      openDate: '1/20/2023, 1:19 PM',
      status: 'open',
      newDate: this.tempDate
    },
    {
      no: '13',
      ticket_Id: '3245',
      task: 'AP',
      person: 'Karthik',
      assign: '1/13/2023, 5:19 PM',
      openDate: '1/14/2023, 1:19 PM',
      status: 'in-progress',
      newDate: this.tempDate
    },
    {
      no: '14',
      ticket_Id: '9832',
      task: 'GST',
      person: 'Joseph',
      assign: '1/14/2023, 5:19 PM',
      openDate: '2/5/2023, 1:19 PM',
      status: 'open',
      newDate: this.tempDate
    },
    {
      no: '15',
      ticket_Id: '6785',
      task: 'WMS',
      person: 'Mahesh',
      assign: '1/15/2023, 5:19 PM',
      openDate: '2/13/2023, 1:19 PM',
      status: 'close',
      newDate: this.tempDate
    },
    {
      no: '16',
      ticket_Id: '4982',
      task: 'DS',
      person: 'Gana',
      assign: '1/16/2023, 5:19 PM',
      openDate: '2/1/2023, 1:19 PM',
      status: 'open',
      newDate: this.tempDate
    },
    {
      no: '17',
      ticket_Id: '1354',
      task: 'WMS',
      person: 'Tamil',
      assign: '1/17/2023, 5:19 PM',
      openDate: '2/12/2023, 1:19 PM',
      status: 'in-progress',
      newDate: this.tempDate
    },
    {
      no: '18',
      ticket_Id: '1245',
      task: 'DS',
      person: 'Joseph',
      assign: '2/1/2023, 5:19 PM',
      openDate: '3/2/2023, 1:19 PM',
      status: 'open',
      newDate: this.tempDate
    },
    {
      no: '19',
      ticket_Id: '7841',
      task: 'AP',
      person: 'Tamil',
      assign: '1/18/2023, 5:19 PM',
      openDate: '3/7/2023, 1:19 PM',
      status: 'close',
      newDate: this.tempDate
    },
    {
      no: '20',
      ticket_Id: '2002',
      task: 'GST',
      person: 'Gana',
      assign: '1/14/2023, 5:19 PM',
      openDate: '2/3/2023, 1:19 PM',
      status: 'close',
      newDate: this.tempDate
    }
  ];

  ds_data=new MatTableDataSource(this.data)


  dates: any[] = [];
  ds_dates = new MatTableDataSource(this.dates)
  oldPersons: any[] = [];
  ds_oldPersons = new MatTableDataSource(this.oldPersons);
  date: any[] = [];

  oldPerson: any[] = [];
  ds_oldPerson = new MatTableDataSource();
  newPerson: any[] = [];
  ds_newPerson = new MatTableDataSource();
  newchangeName: any;
}
