import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

require('./assets/style/reset.css')
require('../node_modules/font-awesome/css/font-awesome.css');
require('../node_modules/primeng/resources/themes/omega/theme.css');
require('../node_modules/primeng/resources/primeng.css');
require('./assets/style/base.css')

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
