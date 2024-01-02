import { Controller, Get, HttpCode, Param } from '@nestjs/common';
@Controller('/params')
export class ParamsController {
  @Get('/:id')

  // multiple params
  // @Get('/:id/:name')
  @HttpCode(200)
  // getParam(@Param() params: Record<string, any>) {
  //   console.log(params);
  //   return 'Success';
  // }
  getParam(@Param('id') param: number) {
    console.log(param);
    return 'Success';
  }

  //   multiple param

  //   getParam(@Param() params: Record<string, any>) {
  //     console.log(params);
  //     return 'Success';
  //   }
}
