import { Component } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-login-button',
  standalone: true,
  imports: [PrimaryButtonComponent],
  templateUrl: './login-button.component.html',
  styleUrl: './login-button.component.scss'
})
export class LoginButtonComponent {

  goToDeliApp() {
    window.open(environment.contact.externalLink, '_blank')
  }

}
