import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'my-store3';
  img:string='';
  showImage:boolean=true;

  onLoaded(valor:string){
    //console.log(valor);
  }

  toggleImage(){
    this.showImage = !this.showImage
  }
}
