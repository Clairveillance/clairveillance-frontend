import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';

export const layout: Array<any> = [
  HeaderComponent,
  FooterComponent,
  SidenavComponent,
];

export * from './header/header.component';
export * from './footer/footer.component';
export * from './sidenav/sidenav.component';
