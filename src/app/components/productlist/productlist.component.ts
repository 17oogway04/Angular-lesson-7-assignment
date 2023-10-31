import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {

  productList: Product[] = [];

  constructor(private productService: CoffeeService) {}

  ngOnInit(): void{
    this.productService.getAllProducts().subscribe(foundProduct => {
      console.log(foundProduct);
      this.productList = foundProduct;
    })
  }

}
