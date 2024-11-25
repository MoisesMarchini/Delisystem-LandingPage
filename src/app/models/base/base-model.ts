import { Merge, RemoveEmptyOrNullFields, RemoveNullFields } from "../../helpers/util";

export abstract class BaseModel<T extends object> {
  constructor(params: Partial<T> = {}, keepEmptyFields = false) {
    params = keepEmptyFields? RemoveNullFields(params) : RemoveEmptyOrNullFields(params);

    const model = Merge(this.defaultModel(), params);
    Object.assign(this, model);
  }

  abstract defaultModel(): T;

  static getDefaultModel<U extends BaseModel<T>, T extends object>(this: new (params?: Partial<T>) => U): U {
    const instance = new this();
    return instance;
  }
}
