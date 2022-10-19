import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { catchError, map } from 'rxjs';
import { PageDTO, PageDTOCreate } from './page.dto';

@Injectable()
export class PageService {
  constructor(private readonly httpService: HttpService) {}

  getPage(pageId: string) {
    return this.httpService
      .get(`https://api.notion.com/v1/pages/${pageId}`, {
        headers: {
          Authorization: `Bearer secret_iNcmYgO0zH7ftoXF9SiXlyiCJw71VVmZXeqUPde6NfF`,
          'Notion-Version': '2022-06-28',
        },
      })
      .pipe(map((response) => response.data))
      .pipe(
        catchError((error) => {
          console.error(error);
          throw new ForbiddenException('API not available');
        }),
      );
  }

  createPage(data: PageDTOCreate) {
    return this.httpService
      .post(`https://api.notion.com/v1/pages/`, data, {
        headers: {
          Authorization: `Bearer secret_iNcmYgO0zH7ftoXF9SiXlyiCJw71VVmZXeqUPde6NfF`,
          'Notion-Version': '2022-06-28',
          'Content-Type': 'application/json',
        },
      })
      .pipe(map((response) => response.data))
      .pipe(
        catchError((error) => {
          console.error(error);
          throw new ForbiddenException('API not available');
        }),
      );
  }

  patchPage(pageId: string, data: PageDTO) {
    return this.httpService
      .patch(`https://api.notion.com/v1/pages/${pageId}`, data, {
        headers: {
          Authorization: `Bearer secret_iNcmYgO0zH7ftoXF9SiXlyiCJw71VVmZXeqUPde6NfF`,
          'Notion-Version': '2022-06-28',
          'Content-Type': 'application/json',
        },
      })
      .pipe(map((response) => response.data))
      .pipe(
        catchError((error) => {
          console.error(error);
          throw new ForbiddenException('API not available');
        }),
      );
  }
}
