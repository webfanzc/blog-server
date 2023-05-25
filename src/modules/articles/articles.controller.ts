import { Body, Controller, Get, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common'
import { ArticlesService } from './articles.service'
import type { PaginationQuery } from 'src/types/utils'
import { AddArticleDto, EditArticleDto } from './dto/articles.dto'
import { Types } from 'mongoose'
import { Public } from '../auth/constants'
import { FileInterceptor } from '@nestjs/platform-express'
import * as multer from 'multer'
import { errorResponse, successResponse } from 'src/utils'
import * as path from 'path'

const storage = multer.diskStorage({
  destination (req, file, cb) {
    // 存储到根目录的images下
    cb(null, path.resolve(__dirname, '/images/'))
  },
  filename (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`)
  }
})

@Controller('articles')
export class ArticlesController {
  constructor (private readonly articlesService: ArticlesService) {}

  @Public()
  @Get('/list')
  async getArticlesList (@Query() params: PaginationQuery & { tagId?: string }) {
    const pagination = {
      pageNo: params.pageNo || 1,
      pageSize: params.pageSize || 10
    }

    if (params.tagId) {
      return await this.articlesService.getList(pagination, {
        tags: {
          $in: [new Types.ObjectId(params.tagId)]
        }
      })
    }

    return await this.articlesService.getList(pagination)
  }

  @Post('/add')
  async addArticle (@Body() articleDto: AddArticleDto) {
    return await this.articlesService.addArticle(articleDto)
  }

  @Public()
  @Get('/detail')
  async getArticleDetail (@Query('id') id: string) {
    return await this.articlesService.findArticleById(id)
  }

  @Get('/delete')
  async deleteArticle (@Query('id') id: string) {
    return await this.articlesService.deleteArticleById(id)
  }

  @Post('/update')
  async updateArticle (@Body() articleDto: EditArticleDto) {
    return await this.articlesService.updateArticleById(articleDto)
  }

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file[]', {
    storage,
    limits: {
      fileSize: 1024 * 1024 * 5 // 5MB
    }
  }))
  async uploadPhoto (@UploadedFile() file: Express.Multer.File, @Body() body: any) {
    if (file.path) {
      return successResponse({
        imagePath: '/images/' + file.filename
      })
    }

    return errorResponse('上传失败')
  }
}
