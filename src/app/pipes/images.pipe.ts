import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if(value.length  == 0) {
      return './assets/images/angular.png'
    }
    return value;
  }

}
