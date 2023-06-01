import { Module } from '@nestjs/common'
import { DemosService } from './demos.service'
import { DemosController } from './demos.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Demo, DemoSchema } from './schemas/demo.schmas'

@Module({
  imports: [MongooseModule.forFeature([{ name: Demo.name, schema: DemoSchema }])],
  providers: [DemosService],
  controllers: [DemosController]
})
export class DemosModule {}
