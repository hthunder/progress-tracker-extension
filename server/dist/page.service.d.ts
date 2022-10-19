import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { PageDTO, PageDTOCreate } from './page.dto';
export declare class PageService {
    private readonly httpService;
    private configService;
    constructor(httpService: HttpService, configService: ConfigService);
    getPage(pageId: string): import("rxjs").Observable<any>;
    createPage(data: PageDTOCreate): import("rxjs").Observable<any>;
    patchPage(pageId: string, data: PageDTO): import("rxjs").Observable<any>;
}
