import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import type { HydratedDocument, ObjectId } from 'mongoose'

@Schema({ collection: 'articles' })
export class Article {
  @Prop()
    title: string

  @Prop()
    abstract: string

  @Prop()
    content: string

  @Prop({ default: 'skelanimals' })
    author: string

  @Prop({ default: 0 })
    createdAt: number

  @Prop({ default: 0 })
    likes: number

  @Prop({ default: 0 })
    unlikes: number

  @Prop({ ref: 'Comment', default: [] })
    comments: ObjectId[]

  @Prop({ ref: 'Tag', default: [] })
    tags: ObjectId[]
}

export type ArticleDocument = HydratedDocument<Article>
export const ArticleSchema = SchemaFactory.createForClass(Article)
