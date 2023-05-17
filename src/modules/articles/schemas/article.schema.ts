import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';

export type ArticleDocument = HydratedDocument<Article>;

@Schema()
export class Article {
  @Prop()
  title: string;

  @Prop()
  abstract: number;

  @Prop()
  cover: string;

  @Prop()
  content: string;

  @Prop({ default: 'skelanimals' })
  author: string;

  @Prop({ default: 0 })
  createAt: number;

  @Prop({ default: 0 })
  likes: number;

  @Prop({ default: 0 })
  unlikes: number;

  @Prop({ ref: 'Comment' })
  comments: [ObjectId];

  @Prop({ ref: 'Tag' })
  tags: [ObjectId];
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
