import { Component, HostBinding } from '@angular/core';
import { environment } from '../../../environments/environment';
import { PrimaryButtonComponent } from "../../components/primary-button/primary-button.component";
import { WarpedSvgComponent } from "../../components/warped-svg/warped-svg.component";
import { ImageTiltComponent } from "../../components/image-tilt/image-tilt.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [PrimaryButtonComponent, WarpedSvgComponent, ImageTiltComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  sectionProps = environment.sectionProps.hero;

  @HostBinding('attr.id') get _sectionId() {
    return 'home';
  }
}
