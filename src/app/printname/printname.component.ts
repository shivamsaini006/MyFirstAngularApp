import { Component, OnInit } from '@angular/core';
import { User } from "../user";

@Component({
  selector: 'app-printname',
  template: `
    <form (ngSubmit)='show()'>
        User Name: <input [(ngModel)]=user.username name='uname'/>
        User Address: <input [(ngModel)]=user.useraddress name='uadd'/>
        User Age: <input [(ngModel)]='user.userage' name='uage'/>
        <button type='submit'>Submit</button>
        <!--<img src='{{imagePath}}'/>-->
        <img [src]='imagePath'/>
        <span [innerHTML]='title'></span>
    </form>
  `,
  styles: [
  ]
})
export class PrintnameComponent implements OnInit{

  imagePath='assets/image.png';
  title='This is my image';

  user = new User();
  constructor() { }

  show(){
    console.log(this.user.username+' '+this.user.useraddress+' '+this.user.userage);
  }

  ngOnInit(): void {
    console.log('OnInit Called');
    console.log(this.user.username+' '+this.user.useraddress+' '+this.user.userage);
  }

}
