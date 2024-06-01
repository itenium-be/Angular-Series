import { KeyValue, JsonPipe, CurrencyPipe, CommonModule, formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
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

  jsonOutput: string;
  constructor(jp: JsonPipe, cp: CurrencyPipe) {
    // JSON Formatting
    this.jsonOutput = jp.transform({key: 0});

    // Currency Formatting:
    console.log('DEPRECATED: CurrencyPipe from AppComponent ctor', cp.transform(450.657, 'EUR', 'symbol', '0.2-2', 'fr'));
    console.log('Instead use formatCurrency fn!', formatCurrency(450.657, 'fr', 'EUR', 'symbol', '0.2-2'));
  }


  pluralMap = {
    '=0': 'zero',
    '=1': 'one',
    'other': 'multiple (#)',
  }

  genderMap = {
    'M': 'Mr',
    'F': 'Ms',
    'X': 'Mx',
  }
}
