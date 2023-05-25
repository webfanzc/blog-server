import { Injectable } from '@nestjs/common'
import { UserService } from '../user/user.service'
import type { User, UserDocument } from '../user/schemas/user.schema'
import type { ObjectId } from 'mongoose'
import { JwtService } from '@nestjs/jwt'
import { successResponse } from 'src/utils'

@Injectable()
export class AuthService {
  constructor (private readonly usersService: UserService, private readonly jwtService: JwtService) {}

  async validateUser (username: string, pass: string): Promise<(Omit<User, 'password'> & { _id: ObjectId }) | null> {
    const user = (await this.usersService.getOneUser({ username }))

    if (user && user.password === pass) {
      const { password, ...result } = user

      return result as unknown as (Omit<User, 'password'> & { _id: ObjectId })
    }

    return null
  }

  async login (user: UserDocument) {
    const payload = { username: user.username, sub: user._id }

    return successResponse({

      access_token: this.jwtService.sign(payload)
    })
  }
}
