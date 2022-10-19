import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PageController } from './page.controller';
import { PageService } from './page.service';
import { DbController } from './db/db.controller';
import { DbService } from './db/db.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, PageController, DbController],
  providers: [AppService, PageService, DbService],
})
export class AppModule {}
