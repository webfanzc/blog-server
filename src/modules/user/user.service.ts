import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import type { FilterQuery } from 'mongoose'
import { Model } from 'mongoose'
import type { UserDocument } from './schemas/user.schema'
import { User } from './schemas/user.schema'

@Injectable()
export class UserService {
  constructor (@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {

  }

  async getOneUser (filter: FilterQuery<UserDocument> = {}) {
    try {
      const query = this.userModel.findOne(filter)

      return (await query.lean().exec())
    } catch (err) {
      console.log(err)
      return null
    }
  }
}
