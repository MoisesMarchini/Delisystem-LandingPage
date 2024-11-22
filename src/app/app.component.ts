import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { WindowService } from './services/window.service';
import { SectionManagerService } from './services/section-manager.service';
import { HeroComponent } from "./sections/hero/hero.component";
import { AfterHeroComponent } from "./sections/after-hero/after-hero.component";
import { OurServicesComponent } from "./sections/our-services/our-services.component";
import { PricingComponent } from "./sections/pricing/pricing.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, HeroComponent, AfterHeroComponent, OurServicesComponent, PricingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Delisystem-LandingPage';

  constructor(private windowService: WindowService, private sectionManagerService: SectionManagerService) { }

  ngAfterViewInit() {
    this.sectionManagerService.init()
  }

  @HostListener('window:scroll')
  onScroll() {
    this.windowService.set('scrollY', window.scrollY);
  }
}
