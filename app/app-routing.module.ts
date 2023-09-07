import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { HomeComponent } from './home/home.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';
import { PostComponent } from './post/post.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [{ path: '', redirectTo: '/dashBoard', pathMatch: 'full' },
{
  path: 'generateOtp',
  component:LoginComponent,
},
{
  path: 'dashBoard',
  component:HomeComponent,
},
{
  path: 'user',
  component: LayoutComponent,
  children: [
    { path: '', component: BlogHomeComponent },
    {
      path: 'BlogHome',
      component: BlogHomeComponent,
    },
    {
      path: 'profile',
      component:ProfileComponent,
    },
    {
      path: 'list',
      component:ListComponent,
    },
    {
      path: 'post',
      component:PostComponent,
    },
  ],
},


{
  path: 'createUser',
  component:CreateUserComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

  
 
