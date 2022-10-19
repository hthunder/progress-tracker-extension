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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageController = void 0;
const common_1 = require("@nestjs/common");
const page_service_1 = require("./page.service");
const page_dto_1 = require("./page.dto");
let PageController = class PageController {
    constructor(pageService) {
        this.pageService = pageService;
    }
    getPage(pageId) {
        return this.pageService.getPage(pageId);
    }
    createPage(body) {
        return this.pageService.createPage(body);
    }
    patchPage(pageId, body) {
        return this.pageService.patchPage(pageId, body);
    }
};
__decorate([
    (0, common_1.Get)('/:pageId'),
    __param(0, (0, common_1.Param)('pageId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PageController.prototype, "getPage", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PageController.prototype, "createPage", null);
__decorate([
    (0, common_1.Patch)('/:pageId'),
    __param(0, (0, common_1.Param)('pageId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, page_dto_1.PageDTO]),
    __metadata("design:returntype", void 0)
], PageController.prototype, "patchPage", null);
PageController = __decorate([
    (0, common_1.Controller)('pages'),
    __metadata("design:paramtypes", [page_service_1.PageService])
], PageController);
exports.PageController = PageController;
//# sourceMappingURL=page.controller.js.map