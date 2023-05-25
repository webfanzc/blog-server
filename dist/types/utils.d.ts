import type { ResponseCode } from './enums';
export interface PaginationQuery {
    pageNo: number;
    pageSize: number;
}
export interface IResponse<T> {
    code: ResponseCode;
    msg: string;
    data?: T;
}
export interface PaginationResponse<T> {
    current: number;
    total: number;
    list: T[];
}
