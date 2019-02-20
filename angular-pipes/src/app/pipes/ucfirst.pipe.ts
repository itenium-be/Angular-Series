import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'ucfirst' })
export class UcFirstPipe implements PipeTransform {
   transform(text: any): string {
     if (typeof text !== 'string') {
       return text;
     }

    return text.slice(0, 1).toUpperCase() + text.slice(1);
  }
}
