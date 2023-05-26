"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const fs = require("fs");
const httpsOptions = {
    key: fs.readFileSync('/usr/local/nginx/cert/chasingdream.cn.pem'),
    cert: fs.readFileSync('/usr/local/nginx/cert/chasingdream.cn.key')
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