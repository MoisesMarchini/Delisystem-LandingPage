import { ContentItem } from "../items/content-item";
import { SectionIdentifier } from "../base/section-identifier";

export interface HeroSection extends SectionIdentifier, ContentItem {
  ctaText: string
}
