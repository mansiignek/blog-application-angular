import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService { 

  private baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  getAllBlog() {
    return this.http.get(this.baseUrl + '/allBlog');
  }

  getCategory() {
    return this.http.get(this.baseUrl + '/category');
  }

  getBlogByCategory(categoryType: string) {
    return this.http.get(this.baseUrl + '/blogByCategoryId',
  {
    params: { categoryType: categoryType },
  })
}
getUserById(id: number) {
  return this.http.get(this.baseUrl + '/users/' + id);
}
getBlogById(id: number) {
  return this.http.get(this.baseUrl + '/blog-by-user-id/' + id);
}
createBlog(blogRequest:any ): Observable<string> {
  console.log(blogRequest)
  return this.http.post<string>(this.baseUrl + '/addBlog',blogRequest);
}
getCommentByBlogId(id: number) {
  return this.http.get(this.baseUrl + '/commentByBlogs/' + id);
}
}
