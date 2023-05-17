import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import type { ArticleDocument } from './schemas/article.schema'
import { Article } from './schemas/article.schema'
import type { FilterQuery } from 'mongoose'
import { Model } from 'mongoose'
import type { PaginationQuery } from 'src/types/utils'
import { successResponse, errorResponse, paginationResponse, calculateStartIndex } from '../../utils/index'
import type { EditArticleDto } from './dto/articles.dto'

@Injectable()
export class ArticlesService {
  constructor (
    @InjectModel(Article.name) private readonly articleModel: Model<ArticleDocument>
  ) {}

  async getList (pagination: PaginationQuery, filter: FilterQuery<ArticleDocument> = {}) {
    const { pageNo, pageSize } = pagination
    const start = calculateStartIndex(pagination)

    try {
      const query = this.articleModel
        .find(filter, 'title abstract author createdAt')
        .sort({ createdAt: -1 })

      const dataQuery = query
        .clone()
        .skip(start)
        .limit(pageSize)

      const countQuery = query.clone()

      return paginationResponse(+pageNo, await countQuery.count(), await dataQuery.exec())
    } catch (error) {
      console.log(error)
      return errorResponse('获取文章列表失败')
    }
  }

  async findArticleByTagId (tagId: string, pagination: PaginationQuery) {
    try {
      // const
      const articles = await this.articleModel
        .find({ tags: { $elemMatch: { $eq: tagId } } }, 'title abstract author createdAt')
        .sort({ createdAt: -1 })
        .skip(calculateStartIndex(pagination))
        .limit(pagination.pageSize)

      return successResponse(articles, '获取文章列表成功')
    } catch (error) {
      console.log(error)
      return errorResponse('获取文章列表失败')
    }
  }

  async findArticleById (id: string) {
    try {
      const article = await this.articleModel.findById(id).populate(['comments', 'tags'])

      return successResponse(article, '获取文章成功')
    } catch (error) {
      console.log(error)
      return errorResponse('获取文章详情失败')
    }
  }

  async deleteArticleById (id: string) {
    try {
      await this.articleModel.findByIdAndDelete(id)

      return successResponse(null, '删除文章成功')
    } catch (error) {
      console.log(error)
      return errorResponse('删除文章失败')
    }
  }

  async addArticle (articleData: Pick<Article, 'title' | 'abstract' | 'tags' | 'content'>) {
    try {
      const ArticleModel = this.articleModel
      const article = new ArticleModel({ ...articleData, createdAt: Date.now() })

      const ret = await article.save()

      return successResponse(ret._id, '添加文章成功')
    } catch (error) {
      console.log(error)
      return errorResponse('添加文章失败')
    }
  }

  async updateArticleById (articleData: EditArticleDto) {
    try {
      const { id, title, abstract, content, tags } = articleData

      await this.articleModel.findByIdAndUpdate(id, {
        title,
        abstract,
        content,
        tags
      })

      return successResponse(null, '更新文章成功')
    } catch (error) {
      console.log(error)
      return errorResponse('更新文章失败')
    }
  }
}
