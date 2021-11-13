import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';

export const modules: Array<any> = [
  MatIconModule,
  MatToolbarModule,
  AppRoutingModule,
  BrowserAnimationsModule,

  CoreModule,
  AuthModule,
  UserModule,
  AdminModule,
  SharedModule,
];

export { MatIconModule } from '@angular/material/icon';
export { AppRoutingModule } from './app-routing.module';
export { MatToolbarModule } from '@angular/material/toolbar';
export { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export * from './core/core.module';
export * from './core/core.module';
export * from './auth/auth.module';
export * from './user/user.module';
export * from './admin/admin.module';
export * from './shared/shared.module';
