import { PageService } from './page.service';
import { PageDTO, PageDTOCreate } from './page.dto';
export declare class PageController {
    private pageService;
    constructor(pageService: PageService);
    getPage(pageId: string): import("rxjs").Observable<any>;
    createPage(body: PageDTOCreate): import("rxjs").Observable<any>;
    patchPage(pageId: string, body: PageDTO): import("rxjs").Observable<any>;
}
