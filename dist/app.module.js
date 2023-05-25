"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const articles_module_1 = require("./modules/articles/articles.module");
const mongoose_1 = require("@nestjs/mongoose");
const tags_module_1 = require("./modules/tags/tags.module");
const comments_module_1 = require("./modules/comments/comments.module");
const auth_module_1 = require("./modules/auth/auth.module");
const user_module_1 = require("./modules/user/user.module");
const core_1 = require("@nestjs/core");
const jwtAuth_guard_1 = require("./modules/auth/jwtAuth.guard");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            articles_module_1.ArticlesModule,
            mongoose_1.MongooseModule.forRoot('mongodb://skelanimals:zcyh0925@127.0.0.1:27017/blog'),
            tags_module_1.TagsModule,
            comments_module_1.CommentsModule,
            auth_module_1.AuthModule,
            user_module_1.UserModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, { provide: core_1.APP_GUARD, useClass: jwtAuth_guard_1.JwtAuthGuard }]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map