import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { CommentComponent } from '../comment/comment.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.scss']
})
export class BlogHomeComponent implements OnInit {
  blogs: any[] = [];
  comments: any[] = [];
  selectedBlogId: number | null = null;
  selectedBlogComments: any[] = [];

  constructor(private blogService: BlogService,private matDialog: MatDialog) {} 

  ngOnInit() {
    
    this.blogService.getAllBlog().subscribe((data: any) => {
      this.blogs = data;
      console.log(data)
    });
  }
  getComment(id:number){
    let dialogRef = this.matDialog.open(CommentComponent, {
      height: '400px',
      width: '600px',
    });
    dialogRef.componentInstance.selectedBlogId = id 

    dialogRef.afterClosed().subscribe(result => {
      window.location.reload();
    });
  }

}
