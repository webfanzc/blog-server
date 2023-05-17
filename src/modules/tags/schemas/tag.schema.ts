import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import type { HydratedDocument } from 'mongoose'

@Schema({ collection: 'tags' })
export class Tag {
  @Prop()
    tagName: string
}

export type TagDocument = HydratedDocument<Tag>
export const TagSchema = SchemaFactory.createForClass(Tag)
