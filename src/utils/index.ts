import { ResponseCode } from 'src/types/enums'
import type { IResponse, PaginationQuery } from 'src/types/utils'

export function successResponse <T=any> (data: T, msg: string = 'success') {
  const response: IResponse<T> = {
    code: ResponseCode.SUCCESS,
    msg,
    data
  }

  return response
}

export function errorResponse (msg: string = 'error') {
  const response: IResponse<null> = {
    code: ResponseCode.ERROR,
    msg,
    data: null
  }

  return response
}

export function paginationResponse<T> (current: number, total: number, list: T[]) {
  return successResponse({
    current,
    total,
    list
  })
}

export function calculateStartIndex (pagination: PaginationQuery) {
  const { pageNo = 1, pageSize = 10 } = pagination

  return (pageNo - 1) * pageSize
}
