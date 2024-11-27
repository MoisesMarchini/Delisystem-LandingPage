import { SectionIdentifier } from "../base/section-identifier";
import { ContentItem } from "../items/content-item";

export interface NewsletterSection extends SectionIdentifier, ContentItem{
  message?: string,
  placeholderText?: string,
  bgImgPath: string,
  endEmail: string
}
