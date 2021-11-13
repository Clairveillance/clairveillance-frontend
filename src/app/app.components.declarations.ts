import { AppComponent } from './app.component';
import { layout as fromLayout } from './core/layout/index';

export const components: Array<any> = [AppComponent, ...fromLayout];

export * from './app.component';
export * from './core/layout/index';
