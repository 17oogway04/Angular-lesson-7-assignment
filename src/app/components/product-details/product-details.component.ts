import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private productService: CoffeeService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const routeId = this.actRoute.snapshot.paramMap.get("id") ?? "";
    this.id = parseInt(routeId);
    this.productService.getProductbyID(this.id).subscribe(foundProduct => {
      console.log(foundProduct);
      this.currentProduct = foundProduct;
    })
  }

  onDelete(id: number){
    this.productService.deleteProductByID(id).subscribe(response => {
      this.router.navigateByUrl("/products");
    })
  }

  
}
