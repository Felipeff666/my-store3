import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: Date): string {
    //formatDistance es un metodo de la libreria date-fns instalada previamente
    return formatDistance(new Date(),value);
  }

}
