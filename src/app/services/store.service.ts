import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
// rxjs es la libreria que implementa todo el patron de observables dentro de angular
//parte de esta es behaviorSubject que nos sirve para crear un observable que nos permite la comunicacion entre componentes
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }
  private myShoppingcart:Product[]=[];

  // crearemos la variable que es un behaviorSubject que tiene un array de products
  private myCart =  new BehaviorSubject<Product[]>([]);
  //en angular una variable que sera un observable se declara comunmente con un signo de pesos al final
  //nombreVariable$
  myCart$ = this.myCart.asObservable();



  addProduct(product:Product){
    this.myShoppingcart.push(product);
    //con el metodo next(this.valor) emitimos un valor
    this.myCart.next(this.myShoppingcart);
  }

  getShoppingCart(){
    return this.myShoppingcart;
  }

  getTotal(){
    /* this.total = this.total + producto.price; */
    /* otra alternativa de calcular el precio total es */
    return this.myShoppingcart.reduce((sum,item)=> sum + item.price,0);
  }
}
