import { Controller, Get, Req, Res, HttpCode } from '@nestjs/common';
import { Request, Response } from 'express';
@Controller('/users')
export class UsersController {
  @Get('/profile')
  //   @Get()
  //@Post()
  @HttpCode(200)
  //   @HttpCode(HttpStatus.OK)
  getProfile(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    res.status(200);
    return {
      name: 'mainul',
    };
  }
}
