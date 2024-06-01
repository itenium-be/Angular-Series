import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'hours', pure: false, standalone: true })
export class HoursPipe implements PipeTransform {
  // Not really pratical to use showHours and showMinutes,
  // more an illustration of multiple pipe parameters.....
  transform(value: Date | number | string, showHours = true, showMinutes = true): string {
    value = new Date(value);
    if (showMinutes) {
        return value.getHours() + ':' + value.getMinutes();
    }
    return value.getHours() + 'h';
  }
}
