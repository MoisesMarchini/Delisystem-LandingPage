import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentItem } from '../../models/section-props';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.scss'
})
export class SectionHeaderComponent {
  @Input() contentItem: Partial<ContentItem> = {title: '', description: ''}
}
