import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-button',
  standalone: true,
  imports: [],
  templateUrl: './social-button.component.html',
  styleUrl: './social-button.component.scss',
  host: {
    class: 'block'
  }
})
export class SocialButtonComponent {
  @Input() link = ''
  @Input() label = ''
}
