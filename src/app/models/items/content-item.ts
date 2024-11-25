import { BaseModel } from "../base/base-model";

export interface ContentItem {
  title: string,
  description: string,
}

export class ContentItem extends BaseModel<ContentItem>{
  override defaultModel(): ContentItem {
    return {
      title: 'Lorem ipsum, dolor sit.',
      description: 'Cum unde quibusdam accusantium eveniet iure, laborum fugiat, nemo ab nostrum consequuntur laboriosam cumque eaque sit aperiam voluptatibus doloribus quidem iste commodi.',
    } as ContentItem;
  }
}
