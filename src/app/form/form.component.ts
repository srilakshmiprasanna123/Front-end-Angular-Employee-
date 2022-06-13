import { Component, OnInit } from '@angular/core';
import { Employee } from './Model/employee';

import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  employee: Employee = new Employee("","","", "", 0, "", "", "");
  constructor(private router:Router) { }
  ngOnInit(): void { }
  
  onSubmit() {
    console.log(this.employee);

    }
    getVal(value: String) {
    this.employee.department = value.toString();
  }

  onCancle() {
    this.router.navigate(["home"]);
  }
  
}
