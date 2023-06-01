import type { FilterQuery } from 'mongoose'
import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import type { DemoDocument } from './schemas/demo.schmas'
import { Demo } from './schemas/demo.schmas'
import { errorResponse, successResponse } from 'src/utils'
import { InjectModel } from '@nestjs/mongoose'
import type { DemoDto } from './dto/demos.dto'

@Injectable()
export class DemosService {
  constructor (@InjectModel(Demo.name) private readonly demoModel: Model<DemoDocument>) {

  }

  async getList (query: FilterQuery<DemoDocument> = {}) {
    try {
      const tags = await this.demoModel.find(query, 'link poster desc')

      return successResponse(tags, '获取标签列表成功')
    } catch (error) {
      console.log(error)
      return errorResponse('获取标签列表失败')
    }
  }

  async addDemo (demoDto: DemoDto) {
    try {
      const demo = await this.demoModel.create(demoDto)

      const tagData = await demo.save()

      return successResponse(tagData._id, '添加demo成功')
    } catch (error) {
      console.log(error)
      return errorResponse('添加失败')
    }
  }

  async deleteDemoById (id: string) {
    try {
      await this.demoModel.findByIdAndDelete(id)

      return successResponse(null, '删除标签成功')
    } catch (error) {
      console.log(error)
      return errorResponse('删除标签失败')
    }
  }

  async updateDemoById (id: string, demoDto: DemoDto) {
    try {
      await this.demoModel.findByIdAndUpdate(id, { ...demoDto })

      return successResponse(null, '更新成功')
    } catch (error) {
      console.log(error)
      return errorResponse('更新失败')
    }
  }
}
