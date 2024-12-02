import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-waves',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './waves.component.html',
  styleUrl: './waves.component.scss'
})
export class WavesComponent {
  @Input() type: WavesType = 'stacked'
  @Input() index = 0;
  @Input() color: string = '#ff6f61'
}

export type WavesType = 'stacked' | 'line'
