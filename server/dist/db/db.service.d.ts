import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
export declare class DbService {
    private readonly httpService;
    private configService;
    constructor(httpService: HttpService, configService: ConfigService);
    getDb(dbId: string): import("rxjs").Observable<any>;
    getPageList(dbId: string, filter: unknown): import("rxjs").Observable<any>;
}
