import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { TagsService } from './tags.service'
import { EditTagDto, TagDto } from './dto/tag.dto'
import { errorResponse, successResponse } from 'src/utils'
import { Public } from '../auth/constants'
import { ArticlesService } from '../articles/articles.service'
import { Types } from 'mongoose'

@Controller('tags')
export class TagsController {
  constructor (private readonly tagService: TagsService, private readonly articlesService: ArticlesService) {}

  @Public()
  @Get('/list')
  async getTagList () {
    return await this.tagService.getTags()
  }

  @Post('/add')
  async addTag (@Body() body: TagDto) {
    if (!body.tagName) return errorResponse('标签名不能为空')

    return await this.tagService.addTag(body.tagName)
  }

  @Get('/delete')
  async deleteTagById (@Query('id') id: string) {
    if (!id) return errorResponse('标签id不能为空')

    return await this.tagService.deleteTagById(id)
  }

  @Post('/update')
  async updateTagById (@Body() body: EditTagDto) {
    const { id, tagName } = body

    if (!id) return errorResponse('标签id不能为空')
    if (!tagName) return errorResponse('标签名不能为空')

    return await this.tagService.updateTagById(body.id, body.tagName)
  }

  @Get('/clearUnusedTags')
  async clearUnusedTags () {
    const tags = await this.tagService.getTags()
    const unusedTags = [] as Types.ObjectId[]

    if (tags.code === 0) {
      const data = tags.data ?? []

      for (let i = 0; i < data.length; i++) {
        const dataItem = data[i]
        const articles = await this.articlesService.getList({ pageNo: 1, pageSize: 10 }, {
          tags: {
            $in: [new Types.ObjectId(dataItem._id)]
          }
        })
        if (articles.code === 0 && !articles.data?.list.length) {
          unusedTags.push(dataItem._id)
        }
      }
    }
    for (const tag of unusedTags) {
      this.tagService.deleteTagById(tag._id as unknown as string).catch(console.error)
    }

    return successResponse(null, '删除成功')
  }
}
