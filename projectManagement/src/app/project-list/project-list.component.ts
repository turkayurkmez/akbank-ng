import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { projects } from '../models/mocks/projects.mock';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects:Project[];

  ngOnInit(): void {
    this.projects = projects;
  }

}
