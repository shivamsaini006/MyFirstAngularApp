import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
import { Emp } from "./emp";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  emp1 = new Emp(1001, 'Ram', 26, 'SE');
  emp2 = new Emp(1002,'Sham',45,'HR');
  emp3 = new Emp(1003,'Rahul',34,'Finance');
  emp4 = new Emp(1004,'Das',39,'DR');

  emp = new Emp(this.emp1, this.emp2, this.emp3,this.emp4);
}
