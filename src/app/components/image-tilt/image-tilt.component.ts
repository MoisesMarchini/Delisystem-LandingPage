import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-tilt',
  standalone: true,
  imports: [],
  templateUrl: './image-tilt.component.html',
  styleUrl: './image-tilt.component.scss'
})
export class ImageTiltComponent {
  @Input() rtl = false;
}
