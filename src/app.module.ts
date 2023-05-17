import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ArticlesModule } from './modules/articles/articles.module'
import { MongooseModule } from '@nestjs/mongoose'
import { TagsModule } from './modules/tags/tags.module'
import { CommentsModule } from './modules/comments/comments.module'

@Module({
  imports: [
    ArticlesModule,
    MongooseModule.forRoot(
      'mongodb://skelanimals:zcyh0925@127.0.0.1:27017/blog'
    ),
    TagsModule,
    CommentsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
