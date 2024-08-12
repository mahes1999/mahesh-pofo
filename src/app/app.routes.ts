import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NgModule } from '@angular/core';

 export const routes: Routes = [
    {
        path: 'about', component: AboutComponent
    },
    { path: 'resume', component: ResumeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'navigation', component: NavigationComponent },

    { path: 'portfolio', component: PortfolioComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', redirectTo: '/about', pathMatch: 'full' }, // Default route
    { path: '**', redirectTo: '/about' } // Wildcard route for a 404 page

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export  class AppRoutingModule { }