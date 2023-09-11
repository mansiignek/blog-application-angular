import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from '../create-user/create-user.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 user:any;
  constructor(private router:Router,private userService: BlogService,private matDialog: MatDialog) {}
  signin(){
  this.router.navigate(['/generateOtp'],{replaceUrl:true}); 
  }
 
}
