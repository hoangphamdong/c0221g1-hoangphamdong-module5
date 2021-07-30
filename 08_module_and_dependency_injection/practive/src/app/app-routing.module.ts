import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'category',
    loadChildren: () => import('./product-manager/category/category.module').then(module => module.CategoryModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product-manager/product/product.module').then(module => module.ProductModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
