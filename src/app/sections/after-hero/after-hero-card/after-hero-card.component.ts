import { Component, Input } from '@angular/core';
import { AfterHeroCard } from '../../../models/items/after-hero-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-after-hero-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './after-hero-card.component.html',
  styleUrl: './after-hero-card.component.scss'
})
export class AfterHeroCardComponent {
  @Input() isLast: boolean = false;
  @Input() model: AfterHeroCard = new AfterHeroCard();
}
