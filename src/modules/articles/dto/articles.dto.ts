import type { ObjectId } from 'mongoose'
import { IntersectionType } from '@nestjs/mapped-types'

export class AddArticleDto {
  readonly title: string
  readonly abstract: string
  readonly content: string
  readonly tags: ObjectId[]
}
export class EditArticleAdditionalInfo {
  readonly id: string
}

export class EditArticleDto extends IntersectionType(AddArticleDto, EditArticleAdditionalInfo) {

}
