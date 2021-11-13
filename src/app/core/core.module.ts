import { NgModule } from '../app.modules.imports';
import { modules as fromModules } from './core.modules.imports';
import { components as fromComponents } from './core.components.declarations';

@NgModule({
  declarations: [...fromComponents],
  imports: [...fromModules],
})
export class CoreModule {}
