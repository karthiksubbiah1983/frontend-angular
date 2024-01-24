import { Routes } from '@angular/router';
import { SignUpFormComponent } from './components/journeys/signup-form/signup-form.component';
import { HomeComponent } from './components/journeys/home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'signup', component: SignUpFormComponent}
  ];
