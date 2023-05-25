import type { ObjectId } from 'mongoose';
export declare class AddArticleDto {
    readonly title: string;
    readonly abstract?: string;
    readonly content: string;
    readonly tags: ObjectId[];
}
export declare class EditArticleAdditionalInfo {
    readonly id: string;
}
declare const EditArticleDto_base: import("@nestjs/mapped-types").MappedType<AddArticleDto & EditArticleAdditionalInfo>;
export declare class EditArticleDto extends EditArticleDto_base {
}
export {};
