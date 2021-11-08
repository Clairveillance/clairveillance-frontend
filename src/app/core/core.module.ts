import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { TitleComponent } from './components/home/title/title.component';
import { InfoComponent } from './pages/info/info.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { UnprocessableEntityComponent } from './errors/unprocessable-entity/unprocessable-entity.component';
import { BadRequestComponent } from './errors/bad-request/bad-request.component';
import { UnauthorizedComponent } from './errors/unauthorized/unauthorized.component';
import { ForbiddenComponent } from './errors/forbidden/forbidden.component';
import { RequestTimeoutComponent } from './errors/request-timeout/request-timeout.component';
import { InternalServerErrorComponent } from './errors/internal-server-error/internal-server-error.component';
import { BadGatewayComponent } from './errors/bad-gateway/bad-gateway.component';
import { ServiceUnavailableComponent } from './errors/service-unavailable/service-unavailable.component';
import { GatewayTimeoutComponent } from './errors/gateway-timeout/gateway-timeout.component';
import { PageExpiredComponent } from './errors/page-expired/page-expired.component';
import { UnsupportedMediaTypeComponent } from './errors/unsupported-media-type/unsupported-media-type.component';

@NgModule({
  declarations: [
    HomeComponent,
    TitleComponent,
    InfoComponent,
    NotFoundComponent,
    UnprocessableEntityComponent,
    BadRequestComponent,
    UnauthorizedComponent,
    ForbiddenComponent,
    RequestTimeoutComponent,
    InternalServerErrorComponent,
    BadGatewayComponent,
    ServiceUnavailableComponent,
    GatewayTimeoutComponent,
    PageExpiredComponent,
    UnsupportedMediaTypeComponent,
  ],
  imports: [CommonModule, CoreRoutingModule, MatToolbarModule],
})
export class CoreModule {}
