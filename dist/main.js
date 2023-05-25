"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets(path.join(__dirname, '..', 'public'));
    await app.listen(3000);
}
bootstrap().catch(console.error);
//# sourceMappingURL=main.js.map