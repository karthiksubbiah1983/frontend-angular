import { Component, OnInit } from '@angular/core';
import { JsonPipe, NgFor, NgIf } from '@angular/common';
import {
  Validators,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  FormGroup
} from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { UserFormFields, User } from '../../../models/userformfields'

@Component({
  selector: 'app-signup-form',
  standalone: true,
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
  imports: [NgIf, NgFor, ReactiveFormsModule, JsonPipe],
})

export class SignUpFormComponent implements OnInit {
  signUpForm!: FormGroup<UserFormFields>;
  submitted = false;
  message = '';

  constructor(private readonly formBuilder: NonNullableFormBuilder, private user: UserService) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      marketing: [false],
      terms: [false, Validators.requiredTrue]
    });
  }

  get signUpFormControl() {
    return this.signUpForm.controls;
  }


  saveUser(): void {
    this.submitted = true;

    if (this.signUpForm.valid) {
      const user: User = this.signUpForm.value as User;
      this.user.saveUser(user).subscribe({
        next: (result) => {
          console.log(result);
          this.message = 'You are registered successfully';
        },
        error: (error) => {
          console.log(error);
          this.message = 'Registration failed';
        }
      });
    }
  }

  resetForm(): void {
    this.message = '';
    this.signUpForm.reset();
    this.submitted = false;
  }
}
