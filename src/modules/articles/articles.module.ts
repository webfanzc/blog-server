import { Module } from '@nestjs/common'
import { ArticlesService } from './articles.service'
import { ArticlesController } from './articles.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Article, ArticleSchema } from './schemas/article.schema'
import { Tag, TagSchema } from '../tags/schemas/tag.schema'
import { Comment, CommentSchema } from '../comments/schemas/comment.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Article.name, schema: ArticleSchema },
      { name: Tag.name, schema: TagSchema },
      { name: Comment.name, schema: CommentSchema }
    ])
  ],
  providers: [ArticlesService],
  controllers: [ArticlesController],
  exports: [ArticlesService]
})
export class ArticlesModule {}
