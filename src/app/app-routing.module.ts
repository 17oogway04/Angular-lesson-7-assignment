import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { HttpClient,HttpClientModule } from '@angular/common/http'

const routes: Routes = [
  { path: " ", redirectTo: "productlist", pathMatch: "full" },
  { path: "products", component: ProductlistComponent },
  { path: "product/:id", component: ProductDetailsComponent },
  { path: "create", component: CreateProductComponent },
  { path: "edit/:id", component: EditProductComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    HttpClientModule, 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
