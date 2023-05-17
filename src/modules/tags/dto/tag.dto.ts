export class TagDto {
  readonly tagName: string
}

export class EditTagDto extends TagDto {
  readonly id: string
}
