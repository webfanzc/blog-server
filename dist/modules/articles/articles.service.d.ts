/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import type { ArticleDocument } from './schemas/article.schema';
import { Article } from './schemas/article.schema';
import type { FilterQuery } from 'mongoose';
import { Model } from 'mongoose';
import type { PaginationQuery } from 'src/types/utils';
import type { EditArticleDto } from './dto/articles.dto';
export declare class ArticlesService {
    private readonly articleModel;
    constructor(articleModel: Model<ArticleDocument>);
    getList(pagination: PaginationQuery, filter?: FilterQuery<ArticleDocument>): Promise<import("src/types/utils").IResponse<null> | import("src/types/utils").IResponse<{
        current: number;
        total: number;
        list: Omit<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Article> & Omit<Article & {
            _id: import("mongoose").Types.ObjectId;
        }, never>> & Omit<import("mongoose").Document<unknown, {}, Article> & Omit<Article & {
            _id: import("mongoose").Types.ObjectId;
        }, never> & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, never>, never>[];
    }>>;
    findArticleByTagId(tagId: string, pagination: PaginationQuery): Promise<import("src/types/utils").IResponse<null> | import("src/types/utils").IResponse<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Article> & Omit<Article & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, Article> & Omit<Article & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>)[]>>;
    findArticleById(id: string): Promise<import("src/types/utils").IResponse<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Article> & Omit<Article & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, Article> & Omit<Article & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>) | null>>;
    deleteArticleById(id: string): Promise<import("src/types/utils").IResponse<null>>;
    addArticle(articleData: Pick<Article, 'title' | 'tags' | 'content'>): Promise<import("src/types/utils").IResponse<null> | import("src/types/utils").IResponse<import("mongoose").Types.ObjectId>>;
    updateArticleById(articleData: EditArticleDto): Promise<import("src/types/utils").IResponse<null>>;
}
