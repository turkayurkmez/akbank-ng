import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { DepartmentMenuComponent } from './department-menu/department-menu.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';

const routes: Routes = [
  {path:'', component:ProjectListComponent},
  {path:'tumProjeler', component:ProjectListComponent},
  {path:'departmanlar', component:DepartmentMenuComponent},
  {path:'projeler/kategori/:id', component:ProjectListComponent},
  {path:'projeEkle', component:AddProjectComponent, canActivate:[LoginGuard]},
  {path:'departmanEkle', component:AddDepartmentComponent, canActivate:[LoginGuard]},
  {path:'login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
