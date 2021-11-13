import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';

export const modules: Array<any> = [
  CommonModule,
  CoreRoutingModule,
  MatToolbarModule,
];

export * from '@angular/common';
export * from './core-routing.module';
export * from '@angular/material/toolbar';
