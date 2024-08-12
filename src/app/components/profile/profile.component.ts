import { Component } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  profile = "https://avatars.githubusercontent.com/u/111627771?s=400&u=13d460f50dcd7c9da11b419dc9d70e4d60ea5190&v=4"
}
