import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DbService } from './db.service';

@Controller('dbs')
export class DbController {
  constructor(private dbService: DbService) {}

  @Get('/:dbId')
  getDb(@Param('dbId') dbId: string) {
    return this.dbService.getDb(dbId);
  }

  @Post('/:dbId/query')
  getPageList(@Param('dbId') dbId: string, @Body() filter: unknown) {
    return this.dbService.getPageList(dbId, filter);
  }
}
