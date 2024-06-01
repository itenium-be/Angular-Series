import { registerLocaleData } from '@angular/common';
import { ApplicationConfig, LOCALE_ID } from '@angular/core';


// https://angular.dev/guide/i18n
// Used by DatePipe, CurrencyPipe, DecimalPipe and PercentPipe
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');


export const appConfig: ApplicationConfig = {
  providers: [
    {provide: LOCALE_ID, useValue: 'fr'},
  ]
};
