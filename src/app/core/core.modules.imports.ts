import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';

export const modules: Array<any> = [
  CommonModule,
  BrowserModule,
  MatToolbarModule,
  CoreRoutingModule,
];

export { CommonModule } from '@angular/common';
export { CoreRoutingModule } from './core-routing.module';
export { BrowserModule } from '@angular/platform-browser';
export { MatToolbarModule } from '@angular/material/toolbar';
