"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const node_fs_1 = require("node:fs");
const httpsOptions = {
    key: node_fs_1.default.readFileSync('/usr/local/nginx/cert/chasingdream.cn.pem'),
    cert: node_fs_1.default.readFileSync('/usr/local/nginx/cert/chasingdream.cn.key')
};
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        httpsOptions
    });
    app.useStaticAssets('/images', { prefix: '/images' });
    await app.listen(3000);
}
bootstrap().catch(console.error);
//# sourceMappingURL=main.js.map