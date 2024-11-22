import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { WindowService } from './window.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionManagerService {
  private pastSectionOffsetScreen = 75;
  private currentSectionSubject = new BehaviorSubject('home');
  currentSection = this.currentSectionSubject.asObservable();
  navLinks = environment.navlinks;
  sections: HTMLElement[] = [];
  highestScrollSaved = 0;

  constructor(private windowService: WindowService) {
    windowService.getValueAsObservable('scrollY').subscribe(scrollY => this.onScroll(scrollY));
  }

  init() {
    this.sections = [];
    for (let index = 0; index < this.navLinks.length; index++) {
      const navlink = this.navLinks[index];
      if (!navlink.id) continue;

      const htmlElement = document.getElementById(navlink.id);

      if (htmlElement)
        this.sections.push(htmlElement);
    }
  }

  private onScroll(scrollY = 0) {
    if (scrollY > this.highestScrollSaved)
      this.highestScrollSaved = scrollY;

    this.getCurrentSection(scrollY);
  }

  hasPastSection(sectionId: string) {
    const sectionElement = this.sections.find(element => element.id === sectionId)?? document.getElementById(sectionId);
    const offsetScreen = window.innerHeight * (this.pastSectionOffsetScreen / 100);

    if (!sectionElement)
      return false;

    return sectionElement.offsetTop <= this.highestScrollSaved + offsetScreen;
  }

  private getCurrentSection(scrollY = 0) {
    if (!this.sections || !this.sections.length) return;

    const currentSection = this.sections.reduce((closest, htmlEl) => {
      const elTop = htmlEl.offsetTop;
      const distanceToScrollY = Math.abs(elTop - scrollY);

      if (!closest || distanceToScrollY < Math.abs(closest.offsetTop - scrollY)) {
        return htmlEl;
      }

      return closest;
    });

    this.currentSectionSubject.next(currentSection.id);
  }
}
