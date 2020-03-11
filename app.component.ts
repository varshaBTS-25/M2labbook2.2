import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeSort';
  Emp=[
    {empid:1001,empname:'Rahul',empsal:19000,empdep:'JAVA',empjoiningdate:'6/12/2014'},
    {empid:1002,empname:'Uma',empsal:11000,empdep:'JAVA',empjoiningdate:'6/12/2017'},
    {empid:1003,empname:'Vikash',empsal:12000,empdep:'ORAAPS',empjoiningdate:'6/2/2010'},
    {empid:1004,empname:'Sachin',empsal:115000,empdep:'.NET',empjoiningdate:'1/12/2018'},
    {empid:1005,empname:'Amol',empsal:1000,empdep:'BI',empjoiningdate:'12/12/2014'}
  ];
  sid(){
    for(let i=0;i<this.Emp.length-1;i++){
      for(let j=i+1;j<this.Emp.length;j++){
        if(this.Emp[i].empid>this.Emp[j].empid){
          let t=this.Emp[i];
          this.Emp[i]=this.Emp[j];
          this.Emp[j]=t;
        }
      }
    }
  }
  sname(){
    for(let i=0;i<this.Emp.length-1;i++){
      for(let j=i+1;j<this.Emp.length;j++){
        if(this.Emp[i].empname>this.Emp[j].empname){
          let t=this.Emp[i];
          this.Emp[i]=this.Emp[j];
          this.Emp[j]=t;
        }
      }
    }
  }
  ssal(){
    for(let i=0;i<this.Emp.length-1;i++){
      for(let j=i+1;j<this.Emp.length;j++){
        if(this.Emp[i].empsal>this.Emp[j].empsal){
          let t=this.Emp[i];
          this.Emp[i]=this.Emp[j];
          this.Emp[j]=t;
        }
      }
    }
  }
  sdep(){
    for(let i=0;i<this.Emp.length-1;i++){
      for(let j=i+1;j<this.Emp.length;j++){
        if(this.Emp[i].empdep>this.Emp[j].empdep){
          let t=this.Emp[i];
          this.Emp[i]=this.Emp[j];
          this.Emp[j]=t;
        }
      }
    }
  }
  
}
