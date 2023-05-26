"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditArticleDto = exports.EditArticleAdditionalInfo = exports.AddArticleDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
class AddArticleDto {
    title;
    abstract;
    content;
    tags;
}
exports.AddArticleDto = AddArticleDto;
class EditArticleAdditionalInfo {
    id;
}
exports.EditArticleAdditionalInfo = EditArticleAdditionalInfo;
class EditArticleDto extends (0, mapped_types_1.IntersectionType)(AddArticleDto, EditArticleAdditionalInfo) {
}
exports.EditArticleDto = EditArticleDto;
//# sourceMappingURL=articles.dto.js.map