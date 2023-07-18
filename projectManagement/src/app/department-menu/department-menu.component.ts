import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department.model';
import { departments } from '../models/mocks/department.mock';
import { HttpClient } from '@angular/common/http';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-department-menu',
  templateUrl: './department-menu.component.html',
  styleUrls: ['./department-menu.component.css']
})
export class DepartmentMenuComponent implements OnInit {


  constructor(private deptService: DepartmentService){

  }
  departments: Department[];



  ngOnInit(): void {
    // this.http.get<Department[]>('https://localhost:7125/api/Departments')
    //          .subscribe(data=>this.departments = data);
     
    this.deptService.getDepartments()
                    .subscribe(data => this.departments = data);
  }

}
