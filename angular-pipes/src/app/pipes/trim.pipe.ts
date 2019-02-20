import { Pipe, PipeTransform  } from '@angular/core';

@Pipe({name: 'trim'})
export class TrimPipe implements PipeTransform {
  transform (input: any, opts: any = {left: true, right: true, char: ' '}): any {
    if (typeof input !== 'string') {
      return input;
    }
    // TODO: Which lazy mofo didn't actually implement the opts? :)
    console.log('trim', '"' + input + '"', 'of', opts);
    return input.trim();
  }
}
