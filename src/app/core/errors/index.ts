import { NotFoundComponent } from './not-found/not-found.component';
import { UnprocessableEntityComponent } from './unprocessable-entity/unprocessable-entity.component';
import { BadRequestComponent } from './bad-request/bad-request.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RequestTimeoutComponent } from './request-timeout/request-timeout.component';
import { InternalServerErrorComponent } from './internal-server-error/internal-server-error.component';
import { BadGatewayComponent } from './bad-gateway/bad-gateway.component';
import { ServiceUnavailableComponent } from './service-unavailable/service-unavailable.component';
import { GatewayTimeoutComponent } from './gateway-timeout/gateway-timeout.component';
import { PageExpiredComponent } from './page-expired/page-expired.component';
import { UnsupportedMediaTypeComponent } from './unsupported-media-type/unsupported-media-type.component';

export const errors: Array<any> = [
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
];

export * from './not-found/not-found.component';
export * from './unprocessable-entity/unprocessable-entity.component';
export * from './bad-request/bad-request.component';
export * from './unauthorized/unauthorized.component';
export * from './forbidden/forbidden.component';
export * from './request-timeout/request-timeout.component';
export * from './internal-server-error/internal-server-error.component';
export * from './bad-gateway/bad-gateway.component';
export * from './service-unavailable/service-unavailable.component';
export * from './gateway-timeout/gateway-timeout.component';
export * from './page-expired/page-expired.component';
export * from './unsupported-media-type/unsupported-media-type.component';
