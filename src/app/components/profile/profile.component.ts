import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Route, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ResumeComponent } from "../resume/resume.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, ResumeComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  profile = "https://avatars.githubusercontent.com/u/111627771?s=400&u=13d460f50dcd7c9da11b419dc9d70e4d60ea5190&v=4"
}
