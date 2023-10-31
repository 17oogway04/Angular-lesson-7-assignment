import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  newProduct: Product = new Product();

  constructor(private productService: CoffeeService, private router: Router) { }

  ngOnInit(): void { }

  onSubmit() {
    this.productService.createNewProduct(this.newProduct).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl("/products")
    })
  }

}
