"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const rxjs_1 = require("rxjs");
let PageService = class PageService {
    constructor(httpService, configService) {
        this.httpService = httpService;
        this.configService = configService;
    }
    getPage(pageId) {
        return this.httpService
            .get(`https://api.notion.com/v1/pages/${pageId}`, {
            headers: {
                Authorization: `Bearer ${this.configService.get('NOTION_API_KEY')}`,
                'Notion-Version': '2022-06-28',
            },
        })
            .pipe((0, rxjs_1.map)((response) => response.data))
            .pipe((0, rxjs_1.catchError)((error) => {
            console.error(error);
            throw new common_1.ForbiddenException('API not available');
        }));
    }
    createPage(data) {
        return this.httpService
            .post(`https://api.notion.com/v1/pages/`, data, {
            headers: {
                Authorization: `Bearer ${this.configService.get('NOTION_API_KEY')}`,
                'Notion-Version': '2022-06-28',
                'Content-Type': 'application/json',
            },
        })
            .pipe((0, rxjs_1.map)((response) => response.data))
            .pipe((0, rxjs_1.catchError)((error) => {
            console.error(error);
            throw new common_1.ForbiddenException('API not available');
        }));
    }
    patchPage(pageId, data) {
        return this.httpService
            .patch(`https://api.notion.com/v1/pages/${pageId}`, data, {
            headers: {
                Authorization: `Bearer ${this.configService.get('NOTION_API_KEY')}`,
                'Notion-Version': '2022-06-28',
                'Content-Type': 'application/json',
            },
        })
            .pipe((0, rxjs_1.map)((response) => response.data))
            .pipe((0, rxjs_1.catchError)((error) => {
            console.error(error);
            throw new common_1.ForbiddenException('API not available');
        }));
    }
};
PageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        config_1.ConfigService])
], PageService);
exports.PageService = PageService;
//# sourceMappingURL=page.service.js.map