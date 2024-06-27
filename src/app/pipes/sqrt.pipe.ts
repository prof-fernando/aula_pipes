import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqrt',
  standalone: true,
})
export class SqrtPipe implements PipeTransform {
  transform(valorEntrada: number, ...args: any[]): number {
    // verifica se recebeu o fator de incremento
    if (args[0]) {
      valorEntrada = valorEntrada * args[0];
    }
    return Math.sqrt(valorEntrada);
  }
}
