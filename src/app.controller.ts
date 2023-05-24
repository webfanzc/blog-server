import { Controller, Post, Request, UseGuards } from '@nestjs/common'
import { AppService } from './app.service'
import { LocalAuthGuard } from './modules/auth/localAuth.guard'
import { AuthService } from './modules/auth/auth.service'
import { Public } from './modules/auth/constants'

@Controller('api')
export class AppController {
  constructor (private readonly appService: AppService, private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Public()
  @Post('/login')
  async login (@Request() req) {
    return await this.authService.login(req.user)
  }
}
