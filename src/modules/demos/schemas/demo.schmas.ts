import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import type { HydratedDocument } from 'mongoose'

@Schema({ collection: 'demos' })
export class Demo {
  @Prop({ required: true })
    /**
     * @description demo 链接
     */
    link: string

  @Prop({ required: true })
    /**
     * @description demo 描述
     */
    desc: string

  @Prop({ required: true })
    /**
     * @description demo 封面链接
     */
    poster: string
}

export type DemoDocument = HydratedDocument<Demo>
export const DemoSchema = SchemaFactory.createForClass(Demo)
