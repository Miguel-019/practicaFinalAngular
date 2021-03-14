import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textUpper'
})
export class TextUpperPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if(value.length == 0) {
      return "VACIO";
    }
    return value.toUpperCase();
  }

}
