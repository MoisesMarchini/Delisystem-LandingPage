import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { SocialButtonComponent } from '../../components/buttons/social-button/social-button.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, SocialButtonComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  socialLinks = environment.contact.socials;
}
