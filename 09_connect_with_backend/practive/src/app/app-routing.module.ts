import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CategoryListComponent} from './category/category-list/category-list.component';
import {CategoryCreateComponent} from './category/category-create/category-create.component';
import {CategoryDeleteComponent} from './category/category-delete/category-delete.component';
import {CategoryEditComponent} from './category/category-edit/category-edit.component';


const routes: Routes = [
  {
    path: '', component: CategoryListComponent
  },
  {
    path: 'category/create', component: CategoryCreateComponent
  },
  {
    path: 'category/edit/:id', component: CategoryEditComponent
  },
  {
    path: 'category/delete/:id', component: CategoryDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
