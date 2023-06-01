export class DemoDto {
  readonly link: string
  readonly poster: string
  readonly desc: string
}
export class UpdateDemoDto extends DemoDto {
  readonly id: string
}
