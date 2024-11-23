import { BaseModel } from "./base-model";
import { ContentItem } from "./content-item";

export interface ServiceItem extends ContentItem {
  imgPath: string,
  rtl: boolean
}

export class ServiceItem extends BaseModel<ServiceItem>{
  override defaultModel(): ServiceItem {
    return {
      imgPath: '',
      rtl: false,
      ...ContentItem.getDefaultModel()
    } as ServiceItem;
  }
}
