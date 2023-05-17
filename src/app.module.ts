import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './modules/articles/articles.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ArticlesModule,
    MongooseModule.forRoot(
      'mongodb://skelanimals:zcyh0925@127.0.0.1:27017/blog',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
