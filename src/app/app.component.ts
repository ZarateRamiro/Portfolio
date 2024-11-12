import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from "./components/about/about.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, SkillsComponent, ProjectsComponent, ContactComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolioD';
}
