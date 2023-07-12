import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit, OnChanges {


  /* @Input() img:string=''; */

  //la forma anterior es adecuado para escuchar todos los cambios en uno y la siguiente para escuchar un cambio en especifico

  img:string='';
  @Input('img')
  set changeImg(newImg:string){
    this.img = newImg;
    console.log('change just img =>', this.img);
    //code
  }

  @Input() alt:string='';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = "../../../assets/default.jpg"
  counter = 0;
  counterFn:number|undefined;

  //El cliclo de vida de este componente esta compuesto por:
  // el constructor(),ngOnChanges(), ngOninit(), ngAfterViewInit(), ngOnDestroy()

  constructor(){
    //El constructor se ejecuta antes del render -- before render
    //Es importante no correr cosas 'async - fetch' por que se crea una sola vez
    console.log('constructor','imgValue=>', this.img)
  }


  ngOnChanges( changes:SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    //Todos los cambios del componente deben ser detectados en esta seccion
    // esta seccion corre antes y durante el render
    console.log('ngOnChanges','imgValue=>', this.img)

    //el valor changes recupera todos los valores cambiados de los inputs declarados en el componente actual
    //gracias a esto podemos evaluar cada uno de los cambias que se realizan en los inputs de manera general en el componente
    // en caso de que querramos ver un cambio de un input en especifico es recomendable usar setters o set
    //al declarar nuestro input
    console.log('changes ',changes);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //En esta parte del ciclo de vida se puede correr metodos o cosas async - fetch ademas que es importante saber
    //que solo corre una vez antes del render
    console.log('ngOnInit','imgValue=>', this.img);


    this.counterFn = window.setInterval(()=>{
      this.counter += 1;
      console.log('run counter')
    },1000)
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    //esta seccion corre despues del render cuando todos los hijos del componente ya se han renderizado
    // y normalmente es usado para manejar o controlar los componentes hijos de este mismo

    console.log('ngAfterViewInit')
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    //esta seccion se corre cuando se elimina el componente
    //Es importante tomar en cuenta que cuando se elimina el componente existen eventos |subscribes|setInterval|setTimeOut que siguen
    //con vida ejecutandose, entonces para que esto no sea un problema, es que se aplica esta seccion o trigger de
    //ngOnDestroy evitandonos asi fugas en memoria de eventos o metodos que se quedan funcionando innecesariamnete
    console.log('OnDestroy');
    window.clearInterval(this.counterFn);
  }

  imgError(){
    this.img= this.imageDefault;
  }

  imgLoaded(){
    //console.log('loaded hijo');
  //En la siguiente linea se emite el evento declarado por el output
    this.loaded.emit(this.img);
  }
}
