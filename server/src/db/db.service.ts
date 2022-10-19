import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { catchError, map } from 'rxjs';

@Injectable()
export class DbService {
  constructor(private readonly httpService: HttpService) {}

  getDb(dbId: string) {
    return this.httpService
      .get(`https://api.notion.com/v1/databases/${dbId}`, {
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

  getPageList(dbId: string, filter: unknown) {
    return this.httpService
      .post(`https://api.notion.com/v1/databases/${dbId}/query`, filter, {
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
