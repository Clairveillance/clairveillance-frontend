import { AppComponent } from './app.component';
import { layout as fromLayout } from './shared/layout/index';
import { errors as fromErrors } from './shared/errors/index';

export const components: Array<any> = [
  AppComponent,
  ...fromLayout,
  ...fromErrors,
];

export * from './app.component';
export * from './shared/layout/index';
export * from './shared/errors/index';
