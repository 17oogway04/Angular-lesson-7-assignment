import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  id: number = 0;

  currentProduct: Product = new Product()

  constructor(private productService: CoffeeService, private actRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void{
    const routeId = this.actRoute.snapshot.paramMap.get("id") ?? "";
    this.id = parseInt(routeId);
    this.productService.getProductbyID(this.id).subscribe(foundProduct => {
      this.currentProduct = foundProduct;
    })
  }

  onSubmit(){
    this.productService.editProductByID(this.id, this.currentProduct). subscribe(edittedProduct => {
      this.router.navigateByUrl("/products");
    })
  }

}
