import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'destaque',
  standalone: true,
})
export class DestaquePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return `<b> ${value} </b>`;
  }
}
