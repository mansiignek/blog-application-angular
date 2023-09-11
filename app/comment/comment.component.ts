import { Component, Input } from '@angular/core';
import { BlogService } from '../blog.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  comments: any[] = [];
  @Input() selectedBlogId: any;

 selectedBlogComments: any[] = [];
  commentForm!:FormGroup;
  constructor(private blogService: BlogService,private snackBar: MatSnackBar,private dialogRef: MatDialogRef<CommentComponent>) {} 

  getComment(){
    let id=this.selectedBlogId;
    this.blogService.getCommentByBlogId(id).subscribe((data:any)=>{
    this.comments=data;
    console.log(data);
    this.selectedBlogId = id;
    this.selectedBlogComments = data;
    })
  }

  ngOnInit() {
    this.initForm();
    this.getComment()
  }

  initForm(){
  this.commentForm = new FormGroup({
    comment: new FormControl(''),
  });
}

onSubmit(){
    let userId={
      id:localStorage.getItem("userId")
    }
    let blogId={
      id : this.selectedBlogId
    }
    let request ={
      comments: this.commentForm.controls['comment'].value,
      userId: userId,
      blogId: blogId
    }
    this.blogService.addComment(request).subscribe({next: (response) => {
      if (response) {
        this.snackBar.open(response, '', { duration: 1000 });
        this.dialogRef.close();
      }
    },
    error: (error) => {
      this.snackBar.open(error['error'], '', { duration: 1000 });
    },
  })
  }
}
