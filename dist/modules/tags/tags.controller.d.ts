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
import { TagsService } from './tags.service';
import { EditTagDto, TagDto } from './dto/tag.dto';
import { ArticlesService } from '../articles/articles.service';
import { Types } from 'mongoose';
export declare class TagsController {
    private readonly tagService;
    private readonly articlesService;
    constructor(tagService: TagsService, articlesService: ArticlesService);
    getTagList(): Promise<import("../../types/utils").IResponse<null> | import("../../types/utils").IResponse<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/tag.schema").Tag> & Omit<import("./schemas/tag.schema").Tag & {
        _id: Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, import("./schemas/tag.schema").Tag> & Omit<import("./schemas/tag.schema").Tag & {
        _id: Types.ObjectId;
    }, never> & Required<{
        _id: Types.ObjectId;
    }>, never>)[]>>;
    addTag(body: TagDto): Promise<import("../../types/utils").IResponse<null> | import("../../types/utils").IResponse<Types.ObjectId>>;
    deleteTagById(id: string): Promise<import("../../types/utils").IResponse<null>>;
    updateTagById(body: EditTagDto): Promise<import("../../types/utils").IResponse<null>>;
    clearUnusedTags(): Promise<import("../../types/utils").IResponse<null>>;
}
