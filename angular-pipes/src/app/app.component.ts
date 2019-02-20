import { Component } from '@angular/core';
import { KeyValue } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';

import { JsonPipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [JsonPipe, CurrencyPipe],
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
  constructor(private jp: JsonPipe, private cp: CurrencyPipe) {
    this.jsonOutput = this.jp.transform({key: 0});
    console.log('CurrencyPipe from AppComponent ctor', cp.transform(450.657, 'EUR', 'symbol', '0.2-2', 'fr'));
  }
}
