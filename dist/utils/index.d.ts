import type { IResponse, PaginationQuery } from 'src/types/utils';
export declare function successResponse<T = any>(data: T, msg?: string): IResponse<T>;
export declare function errorResponse(msg?: string): IResponse<null>;
export declare function paginationResponse<T>(current: number, total: number, list: T[]): IResponse<{
    current: number;
    total: number;
    list: T[];
}>;
export declare function calculateStartIndex(pagination: PaginationQuery): number;
