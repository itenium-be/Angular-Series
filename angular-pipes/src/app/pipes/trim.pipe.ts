import { Pipe, PipeTransform  } from '@angular/core';

type TrimPipeOptions = {
  left: boolean;
  right: boolean;
  char: string;
}

@Pipe({ name: 'trim', standalone: true })
export class TrimPipe implements PipeTransform {
  transform (input: string, opts: TrimPipeOptions = {left: true, right: true, char: ' '}): string {
    // TODO: Which lazy mofo didn't actually implement the opts? :)
    console.log('trim', '"' + input + '"', 'of', opts);
    return input.trim();
  }
}
