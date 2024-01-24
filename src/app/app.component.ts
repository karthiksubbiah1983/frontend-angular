import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { SignUpFormComponent } from './components/journeys/signup-form/signup-form.component';
import { HomeComponent } from './components/journeys/home/home.component';
import { HeaderComponent } from './components/common/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, SignUpFormComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-angular-project';
}
