import { Component, Input } from '@angular/core';
import { ContentItem } from '../../models/content-item';
import { CommonModule } from '@angular/common';

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
