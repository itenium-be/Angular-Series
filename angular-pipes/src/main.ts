import { VERSION } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

console.log('Angular', VERSION.full);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
