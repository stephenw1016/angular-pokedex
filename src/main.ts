// entry point for WebPack to find/load/bundle all the dependencies

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import './global.css';

platformBrowserDynamic().bootstrapModule(AppModule);
