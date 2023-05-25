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
import type { FilterQuery, ProjectionType } from 'mongoose';
import { Model } from 'mongoose';
import type { TagDocument } from './schemas/tag.schema';
export declare class TagsService {
    private readonly tagModel;
    constructor(tagModel: Model<TagDocument>);
    getTags(query?: FilterQuery<TagDocument>): Promise<import("../../types/utils").IResponse<null> | import("../../types/utils").IResponse<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/tag.schema").Tag> & Omit<import("./schemas/tag.schema").Tag & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, import("./schemas/tag.schema").Tag> & Omit<import("./schemas/tag.schema").Tag & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>)[]>>;
    addTag(tagName: string): Promise<import("../../types/utils").IResponse<null> | import("../../types/utils").IResponse<import("mongoose").Types.ObjectId>>;
    findTag<T extends TagDocument>(query?: FilterQuery<T>, projection?: ProjectionType<T>): Promise<import("../../types/utils").IResponse<null> | import("../../types/utils").IResponse<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/tag.schema").Tag> & Omit<import("./schemas/tag.schema").Tag & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, import("./schemas/tag.schema").Tag> & Omit<import("./schemas/tag.schema").Tag & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>)[]>>;
    deleteTagById(id: string): Promise<import("../../types/utils").IResponse<null>>;
    updateTagById(id: string, tagName: string): Promise<import("../../types/utils").IResponse<null>>;
}
