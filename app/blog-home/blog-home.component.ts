import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

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

  constructor(private blogService: BlogService) {} 

  ngOnInit() {
    
    this.blogService.getAllBlog().subscribe((data: any) => {
      this.blogs = data;
      console.log(data)
    });
  }
  getComment(id:number){
    this.blogService.getCommentByBlogId(id).subscribe((data:any)=>{
    this.comments=data;
    console.log(data);
    this.selectedBlogId = id;
    this.selectedBlogComments = data;
    })
  }

}
