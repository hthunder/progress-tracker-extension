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
exports.DbController = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("./db.service");
let DbController = class DbController {
    constructor(dbService) {
        this.dbService = dbService;
    }
    getDb(dbId) {
        return this.dbService.getDb(dbId);
    }
    getPageList(dbId, filter) {
        return this.dbService.getPageList(dbId, filter);
    }
};
__decorate([
    (0, common_1.Get)('/:dbId'),
    __param(0, (0, common_1.Param)('dbId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DbController.prototype, "getDb", null);
__decorate([
    (0, common_1.Post)('/:dbId/query'),
    __param(0, (0, common_1.Param)('dbId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], DbController.prototype, "getPageList", null);
DbController = __decorate([
    (0, common_1.Controller)('dbs'),
    __metadata("design:paramtypes", [db_service_1.DbService])
], DbController);
exports.DbController = DbController;
//# sourceMappingURL=db.controller.js.map