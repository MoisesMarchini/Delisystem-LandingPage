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
import { NewsletterComponent } from './sections/newsletter/newsletter.component';
import { ClientsComponent } from "./sections/clients/clients.component";
import { FacebookPixel } from './facebook-pixel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, HeroComponent, AfterHeroComponent, OurServicesComponent, PricingComponent, NewsletterComponent, ClientsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Delisystem-LandingPage';

  constructor(private windowService: WindowService, private sectionManagerService: SectionManagerService) {
    new FacebookPixel('1369463623419713');
  }

  ngAfterViewInit() {
    this.sectionManagerService.init();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.windowService.set('scrollY', window.scrollY);
  }
}
