"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const globalPrefix = 'service-users';
    const logger = new common_1.Logger("main -> bootstrap()");
    app.setGlobalPrefix(globalPrefix);
    const port = process.env.port || 3334;
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Users Service')
        .setDescription('<a href="/swagger-json">Open API Schema</a>')
        .setVersion('0.1')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('swagger', app, document);
    logger.log(`Starting http://localhost:${port}/swagger`);
    await app.listen(port, () => {
        logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map