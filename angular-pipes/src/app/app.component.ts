import { Component } from '@angular/core';
import { KeyValue } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
}
