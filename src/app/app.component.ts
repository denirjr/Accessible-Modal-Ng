import { Component, TemplateRef, ViewChild } from '@angular/core';
import { fade } from './shared/animations/fade';
import { ModalService } from './shared/components/modal/modal/services/modal.service';
import { ModalRef } from './shared/components/modal/models/model-ref';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fade],
})
export class AppComponent {
  @ViewChild('modal') public modalTempplateRef: TemplateRef<any>;
  title = 'a11y-p2';
  public firstName = 'Denir';
  public modalRef: ModalRef;
  public info = false;

  constructor(private modalService: ModalService) {}

  public show(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTempplateRef,
      title: 'User Details',
    });

  }
}
