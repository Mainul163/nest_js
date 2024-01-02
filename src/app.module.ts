import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { UsersController } from './users.controller';
import { RedirectController } from './redirect.controller';
import { ParamsController } from './paramsId.controller';
import { QueryController } from './quary.controller';
import { DemoCrud } from './demoCrud.controller';

@Module({
  controllers: [
    UsersController,
    RedirectController,
    ParamsController,
    QueryController,
    DemoCrud,
  ],
  providers: [AppService],
})
export class AppModule {}
