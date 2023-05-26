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
exports.TagsController = void 0;
const common_1 = require("@nestjs/common");
const tags_service_1 = require("./tags.service");
const tag_dto_1 = require("./dto/tag.dto");
const utils_1 = require("../../utils");
const constants_1 = require("../auth/constants");
const articles_service_1 = require("../articles/articles.service");
const mongoose_1 = require("mongoose");
let TagsController = class TagsController {
    tagService;
    articlesService;
    constructor(tagService, articlesService) {
        this.tagService = tagService;
        this.articlesService = articlesService;
    }
    async getTagList() {
        return await this.tagService.getTags();
    }
    async addTag(body) {
        if (!body.tagName)
            return (0, utils_1.errorResponse)('标签名不能为空');
        return await this.tagService.addTag(body.tagName);
    }
    async deleteTagById(id) {
        if (!id)
            return (0, utils_1.errorResponse)('标签id不能为空');
        return await this.tagService.deleteTagById(id);
    }
    async updateTagById(body) {
        const { id, tagName } = body;
        if (!id)
            return (0, utils_1.errorResponse)('标签id不能为空');
        if (!tagName)
            return (0, utils_1.errorResponse)('标签名不能为空');
        return await this.tagService.updateTagById(body.id, body.tagName);
    }
    async clearUnusedTags() {
        const tags = await this.tagService.getTags();
        const unusedTags = [];
        if (tags.code === 0) {
            const data = tags.data ?? [];
            for (let i = 0; i < data.length; i++) {
                const dataItem = data[i];
                const articles = await this.articlesService.getList({ pageNo: 1, pageSize: 10 }, {
                    tags: {
                        $in: [new mongoose_1.Types.ObjectId(dataItem._id)]
                    }
                });
                if (articles.code === 0 && !articles.data?.list.length) {
                    unusedTags.push(dataItem._id);
                }
            }
        }
        for (const tag of unusedTags) {
            this.tagService.deleteTagById(tag._id).catch(console.error);
        }
        return (0, utils_1.successResponse)(null, '删除成功');
    }
};
__decorate([
    (0, constants_1.Public)(),
    (0, common_1.Get)('/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TagsController.prototype, "getTagList", null);
__decorate([
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tag_dto_1.TagDto]),
    __metadata("design:returntype", Promise)
], TagsController.prototype, "addTag", null);
__decorate([
    (0, common_1.Get)('/delete'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TagsController.prototype, "deleteTagById", null);
__decorate([
    (0, common_1.Post)('/update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tag_dto_1.EditTagDto]),
    __metadata("design:returntype", Promise)
], TagsController.prototype, "updateTagById", null);
__decorate([
    (0, common_1.Get)('/clearUnusedTags'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TagsController.prototype, "clearUnusedTags", null);
TagsController = __decorate([
    (0, common_1.Controller)('tags'),
    __metadata("design:paramtypes", [tags_service_1.TagsService, articles_service_1.ArticlesService])
], TagsController);
exports.TagsController = TagsController;
//# sourceMappingURL=tags.controller.js.map