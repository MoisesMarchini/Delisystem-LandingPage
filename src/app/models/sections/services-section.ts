import { SectionIdentifier } from "../base/section-identifier";
import { ServiceItem } from "../items/service-item";

export interface ServicesSection extends SectionIdentifier {
  items: ServiceItem[]
}
