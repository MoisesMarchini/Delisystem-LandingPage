import { Component } from '@angular/core';
import { BaseSectionComponent } from '../../layout/base-section/base-section.component';
import { environment } from '../../../environments/environment';
import { ServiceItemComponent } from "./service-item/service-item.component";
import { CommonModule } from '@angular/common';
import { WavesComponent } from "../../components/waves/waves.component";

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [BaseSectionComponent, CommonModule, ServiceItemComponent, WavesComponent],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss'
})
export class OurServicesComponent extends BaseSectionComponent {
  override sectionProps = environment.sectionProps.services;
}
