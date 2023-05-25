import { Module } from '@nestjs/common'
import { TagsService } from './tags.service'
import { TagsController } from './tags.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Article, ArticleSchema } from '../articles/schemas/article.schema'
import { Tag, TagSchema } from './schemas/tag.schema'
import { ArticlesModule } from '../articles/articles.module'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Article.name, schema: ArticleSchema },
      { name: Tag.name, schema: TagSchema }
    ]),
    ArticlesModule
  ],
  providers: [TagsService],
  controllers: [TagsController]
})
export class TagsModule {}
