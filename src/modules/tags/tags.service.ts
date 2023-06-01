import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import type { FilterQuery, ProjectionType } from 'mongoose'
import { Model } from 'mongoose'
import type { TagDocument } from './schemas/tag.schema'
import { Tag } from './schemas/tag.schema'
import { errorResponse, successResponse } from 'src/utils'

@Injectable()
export class TagsService {
  constructor (@InjectModel(Tag.name) private readonly tagModel: Model<TagDocument>) {}

  async getTags (query: FilterQuery<TagDocument> = {}) {
    try {
      const tags = await this.tagModel.find(query, 'tagName')

      return successResponse(tags, '获取标签列表成功')
    } catch (error) {
      console.log(error)
      return errorResponse('获取标签列表失败')
    }
  }

  async addTag (tagName: string) {
    try {
      const TagModel = this.tagModel
      const tag = new TagModel({ tagName })

      const tagData = await tag.save()

      return successResponse(tagData._id, '添加标签成功')
    } catch (error) {
      console.log(error)
      return errorResponse('添加标签失败')
    }
  }

  async findTag <T extends TagDocument>(query: FilterQuery<T> = {}, projection: ProjectionType<T> = '') {
    try {
      const tags = await this.tagModel.find(query, projection)

      return successResponse(tags, '获取标签成功')
    } catch (error) {
      console.log(error)
      return errorResponse('获取标签失败')
    }
  }

  async deleteTagById (id: string) {
    try {
      await this.tagModel.findByIdAndDelete(id)

      return successResponse(null, '删除标签成功')
    } catch (error) {
      console.log(error)
      return errorResponse('删除标签失败')
    }
  }

  async updateTagById (id: string, tagName: string) {
    try {
      await this.tagModel.findByIdAndUpdate(id, { tagName })

      return successResponse(null, '更新标签成功')
    } catch (error) {
      console.log(error)
      return errorResponse('更新标签失败')
    }
  }
}
