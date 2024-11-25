import { BaseModel } from "../base/base-model";
import { ContentItem } from "./content-item";

export interface AfterHeroCard extends ContentItem {
  fontawesomeIcon: string,
}

export class AfterHeroCard extends BaseModel<AfterHeroCard>{
  override defaultModel(): AfterHeroCard {
    return {
      fontawesomeIcon: 'fas fa-hamburger',
      ...ContentItem.getDefaultModel()
    } as AfterHeroCard;
  }
}
