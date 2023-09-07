import { FormGroup } from "@angular/forms";

export class User {
    name: string;
    email: string;
    birthday:Date

  constructor(createUserForm: FormGroup,emailId: any) {

    this.name = createUserForm.controls['userName'].value;
    this.email = emailId;
    this.birthday = createUserForm.controls['BirthDate'].value;
  }
}