import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import type { NestExpressApplication } from '@nestjs/platform-express'
import fs from 'node:fs'
// import * as path from 'path'
const httpsOptions = {
  key: fs.readFileSync('/usr/local/nginx/cert/chasingdream.cn.pem'),
  cert: fs.readFileSync('/usr/local/nginx/cert/chasingdream.cn.key')
}
async function bootstrap () {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    httpsOptions
  })

  app.useStaticAssets('/images', { prefix: '/images' })
  await app.listen(3000)
}

bootstrap().catch(console.error)
