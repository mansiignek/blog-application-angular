import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../model/User';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  @Input() user: any;
  createUserForm!: FormGroup;
  
  constructor(private router: Router,private userService:UserService,private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.initForm();
  }

  initForm(){
  this.createUserForm = new FormGroup({
    userName: new FormControl('',[Validators.required]),
    emailId: new FormControl('',[Validators.required,Validators.email]),
    BirthDate: new FormControl('',[Validators.required]),
  });
}
  onSubmit(){
    if(localStorage.getItem("userId")==null){
    const user = new User(
      this.createUserForm,
     localStorage.getItem("email"),
      
    );
    this.userService.createUser(user).subscribe({next: (response) => {
      if (response) {
        this.snackBar.open(response, '', { duration: 1000 });
       
      }
    },
    error: (error) => {
      this.snackBar.open(error['error'], '', { duration: 1000 });
    },
  });

  }else{
    
    const user = new User(
      this.createUserForm,
     localStorage.getItem("email"),
      
    );

    let userIdString = localStorage.getItem("userId");
    let id: number | null = null;
  
    if (userIdString !== null) {
      id = parseInt(userIdString, 10);
    this.userService.updateUser(id,user).subscribe({next: (response) => {
      if (response) {
        this.snackBar.open(response, '', { duration: 1000 });
        this.router.navigate(['/user/profile']);
       
      }
    },
    error: (error) => {
      this.snackBar.open(error['error'], '', { duration: 1000 });
    },
  });

  }
}
}
  onBtnClick(){
    this.router.navigate(['/login']);
  }
}
