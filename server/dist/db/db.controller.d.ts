import { DbService } from './db.service';
export declare class DbController {
    private dbService;
    constructor(dbService: DbService);
    getDb(dbId: string): import("rxjs").Observable<any>;
    getPageList(dbId: string, filter: unknown): import("rxjs").Observable<any>;
}
