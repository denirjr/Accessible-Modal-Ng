import { Component, TemplateRef, ViewChild } from '@angular/core';
import {
  ModalRef,
  ModalService,
} from './shared/components/modal/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('modal') public modalTempplateRef: TemplateRef<any>;
  title = 'a11y-p2';
  public firstName = 'Denir';
  public modalRef: ModalRef;

  constructor(private modalService: ModalService) {}

  public show(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTempplateRef,
      title: 'User Details',
    });

  }
}
