import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from '../services/department.service';
import { Department } from '../models/department.model';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  constructor(private builder: FormBuilder, private departmentsService: DepartmentService){}

  departments: Department[]
  addProjectForm: FormGroup;
  
  ngOnInit(): void {
    
    this.departmentsService.getDepartments().subscribe(data=>this.departments = data);

    this.addProjectForm = this.builder.group({
      name: ['',[Validators.required,
                 Validators.minLength(3)]],
      description:['', Validators.required],
      departmentId:['', Validators.required]           
    });

    
  }

  checkName() : boolean | undefined{
    return this.addProjectForm.get('name')?.hasError('required') && this.addProjectForm.get('name')?.dirty;
  }
  checkNameMinLength(): boolean|undefined{
    return this.addProjectForm.get('name')?.hasError('minLength') && this.addProjectForm.get('name')?.dirty;

  }

  checkDescription() : boolean | undefined{
    return this.addProjectForm.get('description')?.hasError('required') && this.addProjectForm.get('description')?.dirty;
  }

  checkDepartment() : boolean | undefined{
    return this.addProjectForm.get('departmentId')?.hasError('required') && this.addProjectForm.get('departmentId')?.untouched;
  }

  async addProject(){
    if (this.addProjectForm.valid) {
      alert('proje eklendi!');
    }
  }





}
