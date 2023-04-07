import { coerceStringArray } from '@angular/cdk/coercion';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StorageService } from '../services/storage.service';
import * as XLSX from 'xlsx';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../Models/User';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})

export class PracticeComponent {
  addUser : any;

 

  noData:boolean=false;
  start:any;
  end:any;
  today = new Date;
  cols = ['no', 'ticket_Id', 'task', 'person', 'assign', 'open', 'status'];

  dataSource = new MatTableDataSource();

 httpdata:any;

  http = ['Id','Name','Email','Mobile','Department','Role','edit','delete'];
  httpds=new MatTableDataSource();
isUpdate:boolean=false;
 GetUsers()
 {
  this._storageS.getUsers().subscribe(data=>{
    this.httpdata=data;
    this.httpds=new MatTableDataSource(this.httpdata);
  });
 }

  delete(id)
  {
    this._storageS.DeleteUser(id).subscribe(data=>{
      this.GetUsers();
      console.log(data)     
    });    
  }

UpdateUser(user)
{
  
  this.isUpdate=true;
  this.addUser.setValue({
     
    Id:user.Id,
    Name:user.Name,
    Email:user.Email,
   Mobile:user.Phone,
    Department:user.Department,
    Role:user.Role
  });
  console.log(this.addUser.value)
}

  AddUser()
  {
   if(this.isUpdate)
   {
   // console.log(this.addUser.value)
    this._storageS.updateUser(this.addUser.value).subscribe(data=>{
      this.GetUsers();
      console.log(data);
      this.addUser.setValue({
        Id:"",
        Name:"",
        Email: "",
        Mobile:"",
      Department: "",
        Role: ""
       });
    });
   }
   else
   {
    this._storageS.newUser(this.addUser.value).subscribe(data=>{
      this.GetUsers();   
       this.addUser.setValue({
        Id:"",
        Name:"",
        Email: "",
        Mobile:"",
      Department: "",
        Role: ""
       });
     });
   }
    
  }



  constructor(private _storageS: StorageService, private fb:FormBuilder) {
    console.log(_storageS.dates);
   
    this.GetUsers();

    this.addUser=this.fb.group({
      Id:[''],
      Name: [''],
      Email: [''],
      Mobile:[''],    
    Department: [''],
      Role: [''], 
      
    });

  }
  dates = this._storageS.dates;

  show(name, id, date, task,start,end) {
    this.noData=true;
    let details: any[] = [];


name=name.trim(" ").toLowerCase();
task=task.trim(" ").toLowerCase();







    this._storageS.data.forEach(data => {
       
     if(name && id && task){
      if ((data.person.toLowerCase() == name) && (data.ticket_Id == id) && (data.task.toLowerCase() == task)) {
        details.push(data);

      }
     }
     else if ((name&&id) || (name && task) || (task &&id)){
      if (((data.person.toLowerCase() == name) && (data.ticket_Id == id)) || ((data.person.toLowerCase() == name) && (data.task.toLowerCase() == task)) || ((data.ticket_Id == id) && (data.task.toLowerCase() == task))) {
        details.push(data);
      }
     }
     else if (name || id || task ){
      if((data.person.toLowerCase() == name) || (data.task.toLowerCase() == task) || (data.ticket_Id == id)){
        details.push(data);
      }
     } 
      this.dataSource = new MatTableDataSource(details);


     

      if (date) {
        data.assign.includes(date) || data.openDate.includes(date) ? details.push(data) : {};
        this.dataSource = new MatTableDataSource(details);
      }

      if (this.start  && this.end) {
        let startDateTime=this.start.getTime();
        let endDateTime=this.end.getTime();
        const dataAssignDate=new Date(data.assign).getTime();
        const dataOpenedDate=new Date(data.openDate).getTime();
        (dataAssignDate >= startDateTime && dataAssignDate<=endDateTime) || (dataOpenedDate >=startDateTime && dataOpenedDate <=endDateTime) ?details.push(data) : {};
        this.dataSource = new MatTableDataSource(details);
       
      }

    });
  }

  download() {
    //const table=document.getElementById('table')
    const table = document.querySelector('table');
    const workSheet = XLSX.utils.table_to_sheet(table);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, 'Sheet1');
    const fileName = 'file.xlsx';
    XLSX.writeFile(workBook, fileName);
  }

  oldPersons = this._storageS.oldPersons;
  oldPerson = this._storageS.oldPerson;
  newDate = this._storageS.date;

















  valueToNumber(val: string) {
    const wordToNumber: { [key: string]: number } = {
      'zero': 0,
      'one': 1,
      'two': 2,
      'three': 3,
      'four': 4,
      'five': 5,
      'six': 6,
      'seven': 7,
      'eight': 8,
      'nine': 9,
      'ten': 10,
      'eleven': 11,
      'twelve': 12,
      'thirteen': 13,
      'fourteen': 14,
      'fifteen': 15,
      'sixteen': 16,
      'seventeen': 17,
      'eighteen': 18,
      'nineteen': 19,
      'twenty': 20,
      'thirty': 30,
      'forty': 40,
      'fifty': 50,
      'sixty': 60,
      'seventy': 70,
      'eighty': 80,
      'ninety': 90,
      'hundred': 100,
      'thousand': 1000,
      'lakh': 100000,
      'million': 1000000,
      'crore': 10000000,

    };

    const words = val.toLowerCase().split(' ');
    let total = 0;
    let currentNumber = 0;
    let paise = 0;
    let isPaise = false;

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      let value: number = wordToNumber[word];


      if (word === 'rupees') {
        continue;
      }
      if (word === 'rupee') {
        continue;
      }
      if (word === 'and') {
        continue;
      }
      if (word === 'paise') {
        if (words[i - 3] == 'and') {
          let p1 = wordToNumber[words[i - 1]];
          let p2 = wordToNumber[words[i - 2]];
          let p3 = p1 + p2;
          console.log((p3 / 100))

          paise = p3 / 100;

          continue;
        }
        else {
          let p1 = wordToNumber[words[i - 1]];

          let p3 = p1;
          console.log((p3 / 100))

          paise = p3 / 100;



          continue;
        }

      }


      //two lakh twenty three thousand seven hundred and twenty three and three paise



      if (words[i + 1] !== "paise" && words[i + 2] !== "paise") {
        if (value >= 1000) {

          total += (currentNumber * value);
          currentNumber = 0;
        }
        else if (value >= 100) {
          currentNumber *= value;
        }
        else {
          currentNumber += value;
        }
      }






    }
    total += (currentNumber + paise);
    this.result = total;
    console.log(total);

  }

  result: any;
}
