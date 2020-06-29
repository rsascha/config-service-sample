import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as swStats from 'swagger-stats';
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const globalPrefix = 'service-users';
    const logger = new Logger("main -> bootstrap()");

    app.setGlobalPrefix(globalPrefix);
    const port = process.env.port || 3333;

    const options = new DocumentBuilder()
        .setTitle('Users Service')
        .setDescription('<a href="/swagger-json">Open API Schema</a>')
        .setVersion('0.1')
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('swagger', app, document);
    logger.log(`Starting http://localhost:${port}/swagger`);

    app.use(swStats.getMiddleware({}));
    logger.log(`http://localhost:${port}/swagger-stats/ux#/`)

    setInterval(() => {
        logger.log(`${Date.now()}`);
    }, 1000);

    await app.listen(port, () => {
        logger.log(`Listening at http://localhost:${port}/${globalPrefix}`);
    });
}

bootstrap();
