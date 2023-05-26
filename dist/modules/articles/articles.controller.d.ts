/// <reference types="multer" />
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
import { ArticlesService } from './articles.service';
import type { PaginationQuery } from 'src/types/utils';
import { AddArticleDto, EditArticleDto } from './dto/articles.dto';
import { Types } from 'mongoose';
export declare class ArticlesController {
    private readonly articlesService;
    constructor(articlesService: ArticlesService);
    getArticlesList(params: PaginationQuery & {
        tagId?: string;
    }): Promise<import("src/types/utils").IResponse<null> | import("src/types/utils").IResponse<{
        current: number;
        total: number;
        list: Omit<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/article.schema").Article> & Omit<import("./schemas/article.schema").Article & {
            _id: Types.ObjectId;
        }, never>> & Omit<import("mongoose").Document<unknown, {}, import("./schemas/article.schema").Article> & Omit<import("./schemas/article.schema").Article & {
            _id: Types.ObjectId;
        }, never> & Required<{
            _id: Types.ObjectId;
        }>, never>, never>[];
    }>>;
    addArticle(articleDto: AddArticleDto): Promise<import("src/types/utils").IResponse<null> | import("src/types/utils").IResponse<Types.ObjectId>>;
    getArticleDetail(id: string): Promise<import("src/types/utils").IResponse<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/article.schema").Article> & Omit<import("./schemas/article.schema").Article & {
        _id: Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, import("./schemas/article.schema").Article> & Omit<import("./schemas/article.schema").Article & {
        _id: Types.ObjectId;
    }, never> & Required<{
        _id: Types.ObjectId;
    }>, never>) | null>>;
    deleteArticle(id: string): Promise<import("src/types/utils").IResponse<null>>;
    updateArticle(articleDto: EditArticleDto): Promise<import("src/types/utils").IResponse<null>>;
    uploadPhoto(file: Express.Multer.File, body: any): Promise<import("src/types/utils").IResponse<null> | import("src/types/utils").IResponse<{
        imagePath: string;
    }>>;
    replaceOldUrl(): Promise<import("src/types/utils").IResponse<null>>;
}
