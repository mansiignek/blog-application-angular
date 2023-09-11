import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { loginRequest } from '../model/loginRequest';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  getMailForm: FormGroup;
  otpForm:FormGroup
  genaratedOtp: string = '';
  ans:any
  showOtpFields: boolean = false;

  constructor(private authservices:AuthService,private router: Router,private snackBar: MatSnackBar) {
    this.getMailForm = new FormGroup({
      emailId: new FormControl('',[Validators.required,Validators.email]),
    });

    this.otpForm = new FormGroup({
      otp: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
   
  }

  generateOtp() {
    let emailId=this.getMailForm.controls['emailId'].value;
    let request = {
      email: this.getMailForm.controls['emailId'].value,
      otp:null
    };

    this.authservices.generateOtp(request).subscribe({
      next: (response) => {
        localStorage.setItem("email",emailId);
        this.genaratedOtp = response;
        this.showOtpFields = true;
      },
      error: (error) => {
        this.snackBar.open(error['error'], '', { duration: 1000 });
      },
    });
}
login() {
 
  let request = {
    email: this.getMailForm.controls['emailId'].value,
    otp: this.otpForm.controls['otp'].value
  };

  this.authservices.authenticate(request).subscribe({
    next: (response) => {
      this.ans = response
      const a=this.ans.token
      const id= this.ans.userId
      localStorage.setItem("token",a)
      localStorage.setItem("userId",id)
      this.router.navigate(['/user']);
    },
    error: (error) => {
      this.snackBar.open(error['error'], '', { duration: 1000 });
    }
  });
}


}
