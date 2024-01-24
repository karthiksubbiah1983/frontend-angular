import { FormControl } from "@angular/forms";

export interface UserFormFields {
  firstname: FormControl<string>;
  lastname: FormControl<string>;
  email: FormControl<string>;
  marketing: FormControl<boolean>;
  terms: FormControl<boolean>;
}

export class User {
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  marketing?: boolean = false;
  terms: boolean = false;
}
