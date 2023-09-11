import { Component, Input } from '@angular/core';
import { BlogService } from '../blog.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  category: any[] = [];
  blogForm!: FormGroup;
  @Input() blog: any;
  dialogRef: any;

  constructor(private blogService: BlogService,private snacBar: MatSnackBar,) {} 

  ngOnInit() {
    this.initForm();
    this.getCategory();
  }

  getCategory(){
    this.blogService.getCategory().subscribe((data: any) => {
      this.category = data;
    });
  }
 

 
  initForm() {
    this.blogForm = new FormGroup({
      blogName: new FormControl('', [Validators.required]),
      blogDesc: new FormControl('', [Validators.required, Validators.email]),
      blogCategory: new FormControl('', [Validators.required]),
    });
  }

  addBlog(){
    let userId={
      id:localStorage.getItem("userId")
    }
    let categoryId={
      id : Number.parseInt(
        this.blogForm.controls['blogCategory'].value
      )
    }
    let request ={
      blogDescription: this.blogForm.controls['blogDesc'].value,
      blogName: this.blogForm.controls['blogName'].value,
      userId: userId,
      categoryId: categoryId
    }
    this.blogService.createBlog(request).subscribe({next: (response) => {
      if (response) {
        this.snacBar.open(response, '', { duration: 1000 });
       
      }
    },
    error: (error) => {
      this.snacBar.open(error['error'], '', { duration: 1000 });
      
    },
  });

  }



  
}
