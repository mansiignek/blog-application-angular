import { Component } from '@angular/core';
import { BlogService } from '../blog.service';
import { CreateUserComponent } from '../create-user/create-user.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  
  user: any;
  blogs: any[] = [];
  

  constructor(private userService: BlogService,private matDialog: MatDialog,private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.fetchUserById();
    this.fetchBlogByUserById();
  }
  fetchUserById() {
    
    let userIdString = localStorage.getItem("userId");
    let id: number | null = null;
  
    if (userIdString !== null) {
      id = parseInt(userIdString, 10);
  
    this.userService.getUserById(id).subscribe(
      (data) => {
        this.user = data;
      },
      (error) => {
        this.snackBar.open(error['error'], '', { duration: 1000 });
      }
    );
  
    }}

    fetchBlogByUserById() {
    
      let userIdString = localStorage.getItem("userId");
      let id: number | null = null;
    
      if (userIdString !== null) {
        id = parseInt(userIdString, 10);
    
      this.userService.getBlogById(id).subscribe(
        (data:any) => {
          this.blogs = data;
        },
        (error) => {
          this.snackBar.open(error['error'], '', { duration: 1000 });
        }
      );
    
      }}
      createProfile(){
        let dialogRef = this.matDialog.open(CreateUserComponent, {
          height: '400px',
          width: '300px',
        });
        dialogRef.componentInstance.user = this.user; 

        dialogRef.afterClosed().subscribe(result => {
          window.location.reload();
        });
      }
  }

