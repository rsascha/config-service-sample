import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        "type": "mysql",
        "host": process.env.database || "localhost",
        "port": 3306,
        "username": "root",
        "password": "password",
        "database": "my-test",
        "synchronize": false,
        "logging": true,
        "entities": [
            Movie,
        ],
    })

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
