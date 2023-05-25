"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsModule = void 0;
const common_1 = require("@nestjs/common");
const tags_service_1 = require("./tags.service");
const tags_controller_1 = require("./tags.controller");
const mongoose_1 = require("@nestjs/mongoose");
const article_schema_1 = require("../articles/schemas/article.schema");
const tag_schema_1 = require("./schemas/tag.schema");
const articles_module_1 = require("../articles/articles.module");
let TagsModule = class TagsModule {
};
TagsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: article_schema_1.Article.name, schema: article_schema_1.ArticleSchema },
                { name: tag_schema_1.Tag.name, schema: tag_schema_1.TagSchema }
            ]),
            articles_module_1.ArticlesModule
        ],
        providers: [tags_service_1.TagsService],
        controllers: [tags_controller_1.TagsController]
    })
], TagsModule);
exports.TagsModule = TagsModule;
//# sourceMappingURL=tags.module.js.map