import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit, AfterContentChecked {


  @Input('currentProject') project?: Project;

  incompletedTasksCount?: number;

  ngOnInit(): void {

  }

  ngAfterContentChecked(): void {
    this.incompletedTasksCount = this.project?.tasks?.filter(t => !t.isDone).length;
  }


}
