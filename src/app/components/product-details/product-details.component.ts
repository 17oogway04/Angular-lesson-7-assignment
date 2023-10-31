import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id: number = 0;

  currentProduct: Product = new Product()

  constructor(private productService: CoffeeService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {

  }
}
