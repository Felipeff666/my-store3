import { Component } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  activeMenu:boolean = false;
  counter:number=0;
  constructor(private storeService:StoreService){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.storeService.myCart$
    .subscribe(products =>{
      this.counter= products.length;
    });
  }
  toggleMenu(){
    this.activeMenu = !this.activeMenu;
    console.log(this.activeMenu)
  }
}
