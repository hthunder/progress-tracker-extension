import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PageService } from './page.service';
import { PageDTO, PageDTOCreate } from './page.dto';
import { NotionRequest } from 'notion-api-types';

@Controller('pages')
export class PageController {
  constructor(private pageService: PageService) {}

  @Get('/:pageId')
  getPage(@Param('pageId') pageId: string) {
    return this.pageService.getPage(pageId);
  }

  @Post('/')
  createPage(
    @Body()
    body: PageDTOCreate,
  ) {
    return this.pageService.createPage(body);
  }

  @Patch('/:pageId')
  patchPage(@Param('pageId') pageId: string, @Body() body: PageDTO) {
    return this.pageService.patchPage(pageId, body);
  }
}
