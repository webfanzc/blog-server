"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateStartIndex = exports.paginationResponse = exports.errorResponse = exports.successResponse = void 0;
const enums_1 = require("../types/enums");
function successResponse(data, msg = 'success') {
    const response = {
        code: enums_1.ResponseCode.SUCCESS,
        msg,
        data
    };
    return response;
}
exports.successResponse = successResponse;
function errorResponse(msg = 'error') {
    const response = {
        code: enums_1.ResponseCode.ERROR,
        msg,
        data: null
    };
    return response;
}
exports.errorResponse = errorResponse;
function paginationResponse(current, total, list) {
    return successResponse({
        current,
        total,
        list
    });
}
exports.paginationResponse = paginationResponse;
function calculateStartIndex(pagination) {
    const { pageNo = 1, pageSize = 10 } = pagination;
    return (pageNo - 1) * pageSize;
}
exports.calculateStartIndex = calculateStartIndex;
//# sourceMappingURL=index.js.map