import { Pipe, PipeTransform } from '@angular/core';

/*
 * Signature: bytes | bytes:precision=2
 * Example: {{ 1024 | bytes }}
 *
 * Heavily based on:
 * https://github.com/danrevah/ngx-pipes/blob/master/src/pipes/math/bytes.ts
 *
 * More versatile implementation:
 * https://github.com/fknop/angular-pipes/blob/master/src/math/bytes.pipe.ts
 */
@Pipe({ name: 'bytes', standalone: true })
export class BytesPipe implements PipeTransform {
  private dict: Array<{max: number; type: string}> = [
    { max: 1024, type: 'B' },
    { max: 1048576, type: 'KB' },
    { max: 1073741824, type: 'MB' },
    { max: 1.0995116e12, type: 'GB' },
  ];

  transform(value: number, precision: number = 0): string | number {
    if (isNaN(parseFloat(String(value))) || !isFinite(value)) {
      return NaN;
    }

    const format = this.dict.find(d => value < d.max) || this.dict[this.dict.length - 1];
    const calc = value / (format.max / 1024);
    const num = this.applyPrecision(calc, precision);

    return `${num}${format.type}`;
  }

  applyPrecision(num: number, precision: number) {
    if (precision <= 0) {
      return Math.round(num);
    }

    const tho = 10 ** precision;
    return Math.round(num * tho) / tho;
  }
}
