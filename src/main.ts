import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
