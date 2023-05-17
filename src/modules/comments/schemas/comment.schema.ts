import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import type { HydratedDocument } from 'mongoose'

@Schema({ collection: 'comments' })
export class Comment {
  @Prop({ required: true })
    name: string // 昵称

  @Prop({ required: true })
    content: string

  @Prop({ required: true, default: Date.now() })
    createdAt: number
}

export type CommentDocument = HydratedDocument<Comment>
export const CommentSchema = SchemaFactory.createForClass(Comment)
