import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product:Product = {
    id: '',
    title: '',
    image: '',
    price: 0,
    description: '',
    category: ''
  }
  @Output() addProduct = new EventEmitter<Product>();

  onAddToCard(){
    this.addProduct.emit(this.product)
  }

}
