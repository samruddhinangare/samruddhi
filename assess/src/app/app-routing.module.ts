import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthoriseComponent } from "./authorise/authorise.component";
import { PostComponent } from "./post/post.component";
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  {
    path: '',
    component: AuthoriseComponent
  },
  {
    path: 'post',
    component: PostComponent
  },
  {
    path: 'display',
    component: DisplayComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
