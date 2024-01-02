import { Controller, Query, Get } from '@nestjs/common';
@Controller('/query')
export class QueryController {
  @Get()
  getQuery(@Query() query: Record<string, any>) {
    console.log(query.name);
    return 'Success';
  }
}
