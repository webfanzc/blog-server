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
exports.TagsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const utils_1 = require("../../utils");
let TagsService = class TagsService {
    constructor(tagModel) {
        this.tagModel = tagModel;
    }
    async getTags(query = {}) {
        try {
            const tags = await this.tagModel.find(query, 'tagName');
            return (0, utils_1.successResponse)(tags, '获取标签列表成功');
        }
        catch (error) {
            console.log(error);
            return (0, utils_1.errorResponse)('获取标签列表失败');
        }
    }
    async addTag(tagName) {
        try {
            const TagModel = this.tagModel;
            const tag = new TagModel({ tagName });
            const tagData = await tag.save();
            return (0, utils_1.successResponse)(tagData._id, '添加标签成功');
        }
        catch (error) {
            console.log(error);
            return (0, utils_1.errorResponse)('添加标签失败');
        }
    }
    async findTag(query = {}, projection = '') {
        try {
            const tags = await this.tagModel.find(query, projection);
            return (0, utils_1.successResponse)(tags, '获取标签成功');
        }
        catch (error) {
            console.log(error);
            return (0, utils_1.errorResponse)('获取标签失败');
        }
    }
    async deleteTagById(id) {
        try {
            await this.tagModel.findByIdAndDelete(id);
            return (0, utils_1.successResponse)(null, '删除标签成功');
        }
        catch (error) {
            console.log(error);
            return (0, utils_1.errorResponse)('删除标签失败');
        }
    }
    async updateTagById(id, tagName) {
        try {
            await this.tagModel.findByIdAndUpdate(id, { tagName });
            return (0, utils_1.successResponse)(null, '更新标签成功');
        }
        catch (error) {
            console.log(error);
            return (0, utils_1.errorResponse)('更新标签失败');
        }
    }
};
TagsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Tag')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TagsService);
exports.TagsService = TagsService;
//# sourceMappingURL=tags.service.js.map