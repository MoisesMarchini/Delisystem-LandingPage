import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-warped-svg',
  standalone: true,
  imports: [],
  templateUrl: './warped-svg.component.html',
  styleUrl: './warped-svg.component.scss'
})
export class WarpedSvgComponent {
  @Input() fromColor = '#f5a525'
  @Input() toColor = '#FF3131'
}
