import { PricingItem } from "./pricing";

export interface SectionIdentifier {
  id?: string,
  animate?: boolean
}

export interface ContentItem {
  title: string,
  description: string,
}

export class SectionIdentifier {

}

export interface HeroSection extends SectionIdentifier, ContentItem {
  ctaText: string
}

export interface ServicesSection extends SectionIdentifier {
  items: ServiceItem[]
}

export interface ServiceItem extends ContentItem {
  imgPath: string,
  rtl: boolean
}

export class ServiceItem {
  imgPath = '';
  rtl = false;
  title = 'Lorem ipsum, dolor sit.';
  description = 'Cum unde quibusdam accusantium eveniet iure, laborum fugiat, nemo ab nostrum consequuntur laboriosam cumque eaque sit aperiam voluptatibus doloribus quidem iste commodi.';

  constructor(props?: Partial<ServiceItem>) {
    if (props)
      Object.assign(this, props);
  }
}

export interface PricingSection extends SectionIdentifier, ContentItem {
  items: PricingItem[]
}
