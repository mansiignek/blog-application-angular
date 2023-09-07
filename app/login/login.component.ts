import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { loginRequest } from '../model/loginRequest';
import { Router } from '@angular/router';
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

  constructor(private authservices:AuthService,private router: Router) {
    this.getMailForm = new FormGroup({
      emailId: new FormControl('', [Validators.required]),
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
        console.log(response);
        localStorage.setItem("email",emailId);
        this.genaratedOtp = response;
      },
      error: (error) => {
        console.log(error);
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
      console.log(response)
      this.ans = response
      console.log(this.ans)
      const a=this.ans.token
      const id= this.ans.userId
      console.log(a)
      console.log(id)
      localStorage.setItem("token",a)
      localStorage.setItem("userId",id)
      this.router.navigate(['/user']);
    },
    error: (error) => {
      console.error(error);
    }
  });
}


}
