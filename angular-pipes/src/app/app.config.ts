import { CurrencyPipe, JsonPipe, registerLocaleData } from '@angular/common';
import { ApplicationConfig, LOCALE_ID } from '@angular/core';


// https://angular.dev/guide/i18n
// Used by DatePipe, CurrencyPipe, DecimalPipe and PercentPipe
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');


// import localeNlBe from '@angular/common/locales/nl-BE';
// registerLocaleData(localeNlBe, 'nl-BE');


export const appConfig: ApplicationConfig = {
  providers: [
    {provide: LOCALE_ID, useValue: 'fr'},

    // Provide explicitly because we are injecting
    // these pipes in the app.component constructor
    JsonPipe,
    CurrencyPipe, // ATTN: Use the formatCurrency fn directly instead!
  ]
};
