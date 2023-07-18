import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department.model';
import { departments } from '../models/mocks/department.mock';

@Component({
  selector: 'app-department-menu',
  templateUrl: './department-menu.component.html',
  styleUrls: ['./department-menu.component.css']
})
export class DepartmentMenuComponent implements OnInit {

  departments: Department[];

  ngOnInit(): void {
    this.departments = departments;
  }

}
