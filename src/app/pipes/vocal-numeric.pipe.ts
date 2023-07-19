import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vocalNumeric'
})
export class VocalNumericPipe implements PipeTransform {

  transform(value: string): string {
    //usando expresiones regulares para que sea indiferente de mayustculas y minusculas
    value = value.replace(/a|A/g,'1');
    value = value.replace(/e|E/g,'2');
    value = value.replace(/i|I/g,'3');
    value = value.replace(/o|O/g,'4');
    value = value.replace(/u|U/g,'5');
    return value
  }

}
