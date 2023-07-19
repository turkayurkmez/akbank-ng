import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { projects } from '../models/mocks/projects.mock';
import { ProjectsService } from '../services/projects.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Project[];
  filteredProjects:Project[];
  searchKey: string;


  constructor(private projectsService: ProjectsService,
              private activeRoute: ActivatedRoute) { }
 //! DİKKAT api'den departamana göre FİLTRELEMİYOUZ! Zaten yüklü olan projeler içinde filtreliyoruz !!!
  ngOnInit(): void {
    this.projectsService.getProjects()
        .subscribe(data =>{
          this.projects = data;

          this.activeRoute.params.subscribe(routeData => {
            console.log('gelen parametre:',routeData['id']);
            this.filteredProjects = routeData['id'] != undefined ?
                                    this.projects.filter(p=>p.departmentId == routeData['id'])
                                    :
                                    this.projects;
 
          });

        } );
  }

}
