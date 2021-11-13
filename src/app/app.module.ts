import { modules as fromModules, NgModule } from './app.modules.imports';
import {
  components as fromComponents,
  AppComponent,
} from './app.components.declarations';

@NgModule({
  declarations: [...fromComponents],
  imports: [...fromModules],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
