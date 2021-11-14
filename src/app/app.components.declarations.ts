import { AppComponent } from './app.component';
import { layout as fromLayout } from './shared/layout/index';

export const components: Array<any> = [AppComponent, ...fromLayout];

export * from './app.component';
export * from './shared/layout/index';
