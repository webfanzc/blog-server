import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { TagsService } from './tags.service'
import { EditTagDto, TagDto } from './dto/tag.dto'
import { errorResponse } from 'src/utils'
import { Public } from '../auth/constants'

@Controller('tags')
export class TagsController {
  constructor (private readonly tagService: TagsService) {}

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
}
