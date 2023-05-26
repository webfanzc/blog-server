import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import type { NestExpressApplication } from '@nestjs/platform-express'
// import * as path from 'path'

async function bootstrap () {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  app.useStaticAssets('/images', { prefix: '/images' })
  await app.listen(3000)
}

bootstrap().catch(console.error)
