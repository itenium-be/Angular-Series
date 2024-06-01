import { KeyValue, JsonPipe, CurrencyPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { PanelComponent } from './panel/panel.component';
import { BytesPipe } from './pipes/bytes.pipe';
import { HoursPipe } from './pipes/hours.pipe';
import { Nl2brPipe } from './pipes/nl2br.pipe';
import { TrimPipe } from './pipes/trim.pipe';
import { UcFirstPipe } from './pipes/ucfirst.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, PanelComponent, CommonModule,
    BytesPipe, HoursPipe, Nl2brPipe, TrimPipe, UcFirstPipe,
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  Date = Date;

  object = {
    key1: 1,
    key2: 2
  };

  // revert sorting of this.object keys
  compareFn(a: KeyValue<string, number>, b: KeyValue<string, number>) {
    return b.key.localeCompare(a.key);
  }


  // {{ time$ | async }}
  time$ = new Observable<string>(observer => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  jsonOutput: string = '';
  constructor() {

  }
}
