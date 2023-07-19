import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {


  myShoppingcart:Product[]=[];
  total=0;
  products:Product[]=[];
  today =  new Date();
  date = new Date(2023,4,14);
  constructor(private storeService:StoreService, private productService:ProductsService){
    this.myShoppingcart = this.storeService.getShoppingCart();
  }
  ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

    this.productService.getAllProducts()
    .subscribe(data=>{
      this.products =data;
    });
  }

  onAddToShoppingCart(producto:Product){
    this.storeService.addProduct(producto);
    this.total = this.storeService.getTotal();
  }
}
