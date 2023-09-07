import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule, MatOption } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {MatSelectModule} from '@angular/material/select';
import { HomeComponent } from './home/home.component';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { ListComponent } from './list/list.component';
import { ProfileComponent } from './profile/profile.component';
import { PostComponent } from './post/post.component';
import { LayoutModule } from './layout/layout.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateUserComponent,
   
    
    HomeComponent,
    BlogHomeComponent,
    ListComponent,
    ProfileComponent,
    PostComponent,
    CommentComponent,
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    RouterModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    LayoutModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule,
  
   
   
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true,
  },],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
