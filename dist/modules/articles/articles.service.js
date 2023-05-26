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
exports.ArticlesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const article_schema_1 = require("./schemas/article.schema");
const mongoose_2 = require("mongoose");
const index_1 = require("../../utils/index");
let ArticlesService = class ArticlesService {
    articleModel;
    constructor(articleModel) {
        this.articleModel = articleModel;
    }
    async getList(pagination, filter = {}, fields = 'title abstract author createdAt tags') {
        const { pageNo, pageSize } = pagination;
        const start = (0, index_1.calculateStartIndex)(pagination);
        try {
            const query = this.articleModel
                .find(filter, fields)
                .sort({ createdAt: -1 })
                .populate('tags');
            const dataQuery = query
                .clone()
                .skip(start)
                .limit(pageSize);
            const countQuery = query.clone();
            return (0, index_1.paginationResponse)(+pageNo, await countQuery.count(), await dataQuery.exec());
        }
        catch (error) {
            console.log(error);
            return (0, index_1.errorResponse)('获取文章列表失败');
        }
    }
    async findArticleByTagId(tagId, pagination) {
        try {
            const articles = await this.articleModel
                .find({ tags: { $elemMatch: { $eq: tagId } } }, 'title abstract author createdAt')
                .sort({ createdAt: -1 })
                .skip((0, index_1.calculateStartIndex)(pagination))
                .limit(pagination.pageSize);
            return (0, index_1.successResponse)(articles, '获取文章列表成功');
        }
        catch (error) {
            console.log(error);
            return (0, index_1.errorResponse)('获取文章列表失败');
        }
    }
    async findArticleById(id) {
        try {
            const article = await this.articleModel.findById(id).populate(['comments', 'tags']);
            return (0, index_1.successResponse)(article, '获取文章成功');
        }
        catch (error) {
            console.log(error);
            return (0, index_1.errorResponse)('获取文章详情失败');
        }
    }
    async deleteArticleById(id) {
        try {
            await this.articleModel.findByIdAndDelete(id);
            return (0, index_1.successResponse)(null, '删除文章成功');
        }
        catch (error) {
            console.log(error);
            return (0, index_1.errorResponse)('删除文章失败');
        }
    }
    async addArticle(articleData) {
        try {
            const ArticleModel = this.articleModel;
            const article = new ArticleModel({ ...articleData, createdAt: Date.now() });
            const ret = await article.save();
            return (0, index_1.successResponse)(ret._id, '添加文章成功');
        }
        catch (error) {
            console.log(error);
            return (0, index_1.errorResponse)('添加文章失败');
        }
    }
    async updateArticleById(articleData) {
        try {
            const { id, title, abstract, content, tags } = articleData;
            await this.articleModel.findByIdAndUpdate(id, {
                title,
                abstract,
                content,
                tags
            });
            return (0, index_1.successResponse)(null, '更新文章成功');
        }
        catch (error) {
            console.log(error);
            return (0, index_1.errorResponse)('更新文章失败');
        }
    }
};
ArticlesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(article_schema_1.Article.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ArticlesService);
exports.ArticlesService = ArticlesService;
//# sourceMappingURL=articles.service.js.map