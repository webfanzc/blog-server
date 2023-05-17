import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Article, ArticleDocument } from './schemas/article.schema'
import { Model } from 'mongoose'
import { PaginationQuery } from 'src/types/utils'

@Injectable()
export class ArticlesService {
  constructor (
    @InjectModel(Article.name) private articleModel: Model<ArticleDocument>
  ) {}

  getIndex () {
    return this.getList()
  }

  async create () {
    return false
  }

  async delete () {
    return false
  }

  async getList (pagination: PaginationQuery = { pageNo: 1, pageSize: 10 }) {
    const { pageNo, pageSize } = pagination
    try {
      const query = this.articleModel
        .find()
        .skip((pageNo - 1) * pageSize)
        .limit(pageSize)
        .sort({ createAt: -1 })
        .populate(['comments', 'tags'])

      return {
        data: await query.exec(),
        total: await query.count(),
        current: pageNo
      }
    } catch (error) {
      console.log(error)
    }
  }

  async findOne () {
    return false
  }
}
