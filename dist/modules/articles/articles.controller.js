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
exports.ArticlesController = void 0;
const common_1 = require("@nestjs/common");
const articles_service_1 = require("./articles.service");
const articles_dto_1 = require("./dto/articles.dto");
const mongoose_1 = require("mongoose");
const constants_1 = require("../auth/constants");
const platform_express_1 = require("@nestjs/platform-express");
const multer = require("multer");
const utils_1 = require("../../utils");
const path = require("path");
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, path.resolve(__dirname, '/images/'));
    },
    filename(req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});
let ArticlesController = class ArticlesController {
    articlesService;
    constructor(articlesService) {
        this.articlesService = articlesService;
    }
    async getArticlesList(params) {
        const pagination = {
            pageNo: params.pageNo || 1,
            pageSize: params.pageSize || 10
        };
        if (params.tagId) {
            return await this.articlesService.getList(pagination, {
                tags: {
                    $in: [new mongoose_1.Types.ObjectId(params.tagId)]
                }
            });
        }
        return await this.articlesService.getList(pagination);
    }
    async addArticle(articleDto) {
        return await this.articlesService.addArticle(articleDto);
    }
    async getArticleDetail(id) {
        return await this.articlesService.findArticleById(id);
    }
    async deleteArticle(id) {
        return await this.articlesService.deleteArticleById(id);
    }
    async updateArticle(articleDto) {
        return await this.articlesService.updateArticleById(articleDto);
    }
    async uploadPhoto(file, body) {
        if (file.path) {
            return (0, utils_1.successResponse)({
                imagePath: '/images/' + file.filename
            });
        }
        return (0, utils_1.errorResponse)('上传失败');
    }
};
__decorate([
    (0, constants_1.Public)(),
    (0, common_1.Get)('/list'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "getArticlesList", null);
__decorate([
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [articles_dto_1.AddArticleDto]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "addArticle", null);
__decorate([
    (0, constants_1.Public)(),
    (0, common_1.Get)('/detail'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "getArticleDetail", null);
__decorate([
    (0, common_1.Get)('/delete'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "deleteArticle", null);
__decorate([
    (0, common_1.Post)('/update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [articles_dto_1.EditArticleDto]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "updateArticle", null);
__decorate([
    (0, common_1.Post)('/upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file[]', {
        storage,
        limits: {
            fileSize: 1024 * 1024 * 5
        }
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "uploadPhoto", null);
ArticlesController = __decorate([
    (0, common_1.Controller)('articles'),
    __metadata("design:paramtypes", [articles_service_1.ArticlesService])
], ArticlesController);
exports.ArticlesController = ArticlesController;
//# sourceMappingURL=articles.controller.js.map