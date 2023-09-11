import { Component } from '@angular/core';
import { BlogService } from '../blog.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  category: any[] = [];
  searchText: string = '';
  blogs: any[] = [];

  constructor(private blogService: BlogService,private snacBar: MatSnackBar,) {} 

  ngOnInit() {
    this.blogService.getCategory().subscribe((data: any) => {
      this.category = data;
    });
  }

  searchBlog() {
   if(this.searchText.length != 0){

    this.blogService.getBlogByCategory(this.searchText).subscribe(
      (response: any) => {
        if (response && response.length > 0) {
          this.blogs = response;
        } 
        else{
          this.snacBar.open("no data found", '', { duration: 1000 });
        }
      },
      (error) => {
        this.snacBar.open(error['error'], '', { duration: 1000 });
      }
    );
  }
}

}
