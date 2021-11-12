import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { CoreModule } from './core/core.module';

export const modules: Array<any> = [CoreModule, AdminModule, UserModule];

export * from './user/user.module';
export * from './admin/admin.module';
export * from './core/core.module';
