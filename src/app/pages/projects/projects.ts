import { Component } from '@angular/core';
import { ProjectsTemplate } from "../../shared/templates/projects-template/projects-template";

@Component({
  selector: 'app-projects',
  imports: [ProjectsTemplate],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

}
