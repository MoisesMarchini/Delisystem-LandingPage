import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionManagerService } from '../../services/section-manager.service';
import { WindowService } from '../../services/window.service';
import { LoginButtonComponent } from "../../components/buttons/login-button/login-button.component";
import { AppLogoComponent } from "../../components/app-logo/app-logo.component";
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, LoginButtonComponent, AppLogoComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  appColors = environment.appColors;
  contact = environment.contact;
  navlinks = environment.navlinks;
  currentSection = 'home';
  navCollapse = true;
  windowScrollY = 0;

  constructor(private sectionManagerService: SectionManagerService, private windowService: WindowService) {
    sectionManagerService.currentSection.subscribe(currentSectionId => this.currentSection = currentSectionId);
    windowService.getValueAsObservable('scrollY').subscribe(scrollY => this.windowScrollY = scrollY?? 0)
  }
}
