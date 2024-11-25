import { Component, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { WhatsappService } from '../../services/whatsapp.service';
import { environment } from '../../../environments/environment';
import { BaseButtonComponent } from '../base-button/base-button.component';


export type ButtonActions = 'app' | { wppMessage: string } | { method: () => void }
@Component({
  selector: 'button[primary]',
  standalone: true,
  imports: [],
  template: '<ng-content></ng-content>',
  styleUrl: './primary-button.component.scss',
  host: {
    animate:"false",
  }
})
export class PrimaryButtonComponent extends BaseButtonComponent{
  @Input() action?: ButtonActions;

  override defaultClasses = "bg-highlight text-white rounded-full justify-items-center items-center hover:bg-red-700 transition inline-flex font-oswald py-3 px-6 lg:text-xl uppercase font-medium"

  constructor(private whatsappService: WhatsappService, el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
  }

  @HostListener('click')
  onClick() {
    if (!this.action)
      return;

    if (this.action === 'app') {
      this.handleAppAction()
      return;
    }

    if ('wppMessage' in this.action) {
      this.handleWppMessageAction(this.action.wppMessage);
      return;
    }

    if ('method' in this.action) {
      this.handleMethodAction(this.action.method);
    }
  }

  private handleAppAction() {
    window.open(environment.contact.externalLink, '_blank')
  }

  private handleWppMessageAction(message: string) {
    this.whatsappService.sendMessage(message);
  }

  private handleMethodAction(method: () => void) {
    method();
  }
}

