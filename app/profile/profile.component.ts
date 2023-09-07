import { Component } from '@angular/core';
import { BlogService } from '../blog.service';
import { CreateUserComponent } from '../create-user/create-user.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  
  user: any;
  blogs: any[] = [];
  

  constructor(private userService: BlogService,private matDialog: MatDialog) {}

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
        console.log(this.user)
      },
      (error) => {
        console.error('Error fetching user data:', error);
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
          console.log(this.blogs)
        },
        (error) => {
          console.error('Error fetching user data:', error);
        }
      );
    
      }}
      createProfile(){
        let dialogRef = this.matDialog.open(CreateUserComponent, {
          height: '400px',
          width: '600px',
        });
        dialogRef.componentInstance.user = this.user; 

        dialogRef.afterClosed().subscribe(result => {
          window.location.reload();
        });
      }
  }

