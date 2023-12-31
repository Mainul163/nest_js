import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { UsersController } from './users.controller';
import { RedirectController } from './redirect.controller';

@Module({
  controllers: [UsersController, RedirectController],
  providers: [AppService],
})
export class AppModule {}
