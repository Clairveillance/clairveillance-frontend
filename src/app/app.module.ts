import { NgModule } from '@angular/core';
import { modules as fromModules } from './app.modules.imports';
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
