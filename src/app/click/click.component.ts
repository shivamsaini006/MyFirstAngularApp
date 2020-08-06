import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click',
  template: `
    <p><button (click) = "show()">Click Here</button></p>
      <p>Let us count number of clicks</p>
      <p>Number of clicks are: {{num}}</p>
  `,
  styles: ['p{font-weight:bold;font-size:40px;font-family:arial}'
]
})
export class ClickComponent implements OnInit {

  num:number=101;

  show(){
    this.num++;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
