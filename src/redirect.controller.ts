import {
  Controller,
  Get,
  Post,
  Req,
  Res,
  HttpCode,
  Redirect,
} from '@nestjs/common';
import { Request, Response } from 'express';
@Controller('/test')
export class RedirectController {
  @Post('')
  //   @Get()
  //@Post()
  @Redirect('/test/account')
  @HttpCode(301)
  //   @HttpCode(HttpStatus.OK)
  getProfile(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    return {
      name: 'mainul',
    };
  }
  @Get('/account')
  redirectRoute() {
    return 'Working account';
  }
}
