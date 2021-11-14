import { components as fromComponents } from './components/index';
import { pages as fromPages } from './pages/index';

export const components: Array<any> = [...fromComponents, ...fromPages];

export * from './components/index';
export * from './pages/index';
