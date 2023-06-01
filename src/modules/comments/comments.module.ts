import { Module } from '@nestjs/common'
import { CommentsService } from './comments.service'
import { CommentsController } from './comments.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Demo, DemoSchema } from '../demos/schemas/demo.schmas'

@Module({
  imports: [MongooseModule.forFeature([{ name: Demo.name, schema: DemoSchema }])],
  providers: [CommentsService],
  controllers: [CommentsController]
})
export class CommentsModule { }
