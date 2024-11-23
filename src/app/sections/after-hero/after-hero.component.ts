import { Component } from '@angular/core';
import { AfterHeroCardComponent } from "./after-hero-card/after-hero-card.component";
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-after-hero',
  standalone: true,
  imports: [AfterHeroCardComponent, CommonModule],
  templateUrl: './after-hero.component.html',
  styleUrl: './after-hero.component.scss'
})
export class AfterHeroComponent {
  sectionProps = environment.sectionProps.afterHero;
}
