import { FormGroup } from "@angular/forms";

export class loginRequest {
    
    email: string;
    otp: string;
    

  constructor(getMailForm : FormGroup, otpFrom :FormGroup) {

    this.email = getMailForm.controls['emailId'].value;
    this.otp = otpFrom.controls['otp'].value;

  }
}