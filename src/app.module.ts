import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ArticlesModule } from './modules/articles/articles.module'
import { MongooseModule } from '@nestjs/mongoose'
import { TagsModule } from './modules/tags/tags.module'
import { CommentsModule } from './modules/comments/comments.module'
import { AuthModule } from './modules/auth/auth.module'
import { UserModule } from './modules/user/user.module'
import { APP_GUARD } from '@nestjs/core'
import { JwtAuthGuard } from './modules/auth/jwtAuth.guard'

@Module({
  imports: [
    ArticlesModule,
    MongooseModule.forRoot(
      'mongodb://skelanimals:zcyh0925@127.0.0.1:27017/blog'
    ),
    TagsModule,
    CommentsModule,
    AuthModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: JwtAuthGuard }]
})
export class AppModule {}
