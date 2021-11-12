import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';

import { components as fromComponents } from './components';
import { pages as fromPages } from './pages';
import { errors as fromErrors } from './errors';

@NgModule({
  declarations: [...fromComponents, ...fromPages, ...fromErrors],
  imports: [CommonModule, CoreRoutingModule, MatToolbarModule],
})
export class CoreModule {}
