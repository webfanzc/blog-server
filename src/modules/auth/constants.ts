import { SetMetadata } from '@nestjs/common'
// 生产环境不要把这个secret写在本文件 考虑移植到环境变量等
export const jwtConstants = {
  secret: 'secretKey'
}

export const IS_PUBLIC_KEY = 'isPublic'
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true)
