export interface BaseResponse<T> {
  success: boolean,
  message: string,
  data: T
}

export class BaseResponse<T> {
  constructor(params: Partial<BaseResponse<T>>) {
    Object.assign(this, params)
  }
}

