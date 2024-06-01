import { Pipe, PipeTransform } from '@angular/core';

// Usage: <div [innerHTML]="'Line1\nLine2' | translate | nl2br"></div>

@Pipe({ name: 'nl2br', standalone: true })
export class Nl2brPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/\n/g, '<br />');
  }
}
