import { components as fromComponents } from './components/index';
import { pages as fromPages } from './pages/index';
import { errors as fromErrors } from './errors/index';

export const components: Array<any> = [
  ...fromComponents,
  ...fromPages,
  ...fromErrors,
];

export * from './components/index';
export * from './pages/index';
export * from './errors/index';
