import { Component, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreateUserComponent } from 'src/app/create-user/create-user.component';
import { PostComponent } from 'src/app/post/post.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() isShow: boolean = false;
  blog:any;

  // toggleSidebar() {
  //   this.isSidebarOpen = !this.isSidebarOpen;
  //   this.sidenav.toggle();
  // }
  constructor(private router:Router,private matDialog: MatDialog) {}
  redirectToHome() {  
      this.router.navigate(['/user/BlogHome'],{replaceUrl:true});  
    
  }
  redirectToList() {
    
    this.router.navigate(['/user/list'],{replaceUrl:true});  
  }
  redirectToProfile() {
    
    this.router.navigate(['/user/profile'],{replaceUrl:true});  
  }
  redirectToPost() {
    let dialogRef = this.matDialog.open(PostComponent, {
      height: '400px',
      width: '600px',
    });
    dialogRef.componentInstance.blog = this.blog; 
   
    dialogRef.afterClosed().subscribe(result => {
      window.location.reload();
    });
  
  }

}
