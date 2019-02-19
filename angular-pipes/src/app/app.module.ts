import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import localeFr from '@angular/common/locales/fr';
import { PanelComponent } from './panel/panel.component';

// https://angular.io/guide/i18n#setting-up-the-locale-of-your-app
// Used by DatePipe, CurrencyPipe, DecimalPipe and PercentPipe
registerLocaleData(localeFr, 'fr');


@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr'}],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
