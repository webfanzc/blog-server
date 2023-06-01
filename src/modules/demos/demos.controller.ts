import { Controller, Get, Post, Body, Query } from '@nestjs/common'
import { errorResponse } from '../../utils/index'
import { DemosService } from './demos.service'
import { Public } from '../auth/constants'
import { DemoDto, UpdateDemoDto } from './dto/demos.dto'

@Controller('demos')
export class DemosController {
  constructor (private readonly demoService: DemosService) {}

  @Public()
  @Get('/list')
  async getTagList () {
    return await this.demoService.getList()
  }

  @Post('/add')
  async addTag (@Body() body: DemoDto) {
    const { desc, link, poster } = body
    if (!poster) return errorResponse('请上传封面')
    if (!link) return errorResponse('请填写链接')
    if (!desc) return errorResponse('请填写描述')

    return await this.demoService.addDemo(body)
  }

  @Get('/delete')
  async deleteTagById (@Query('id') id: string) {
    if (!id) return errorResponse('id不能为空')

    return await this.demoService.deleteDemoById(id)
  }

  @Post('/update')
  async updateTagById (@Body() body: UpdateDemoDto) {
    const { id, poster, link, desc } = body
    if (!poster) return errorResponse('请上传封面')
    if (!link) return errorResponse('请填写链接')
    if (!desc) return errorResponse('请填写描述')

    if (!id) return errorResponse('id不能为空')

    return await this.demoService.updateDemoById(body.id, body)
  }
}
