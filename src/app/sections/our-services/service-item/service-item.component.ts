import { Component, Input } from '@angular/core';
import { ImageTiltComponent } from "../../../components/image-tilt/image-tilt.component";
import { SectionHeaderComponent } from "../../../components/section-header/section-header.component";
import { ServiceItem } from '../../../models/items/service-item';

@Component({
  selector: 'app-service-item',
  standalone: true,
  imports: [ImageTiltComponent, SectionHeaderComponent],
  templateUrl: './service-item.component.html',
  styleUrl: './service-item.component.scss'
})
export class ServiceItemComponent {
  @Input() model = new ServiceItem();
}
