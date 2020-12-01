import { Component, HostBinding } from '@angular/core';
import { fade } from 'src/app/shared/animations/fade';
import { ModalRef } from '../models/model-ref';
import { ModalConfig } from './interfaces/modal-config';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [fade],
})
export class ModalComponent {
  @HostBinding('@fade') fade = true;
  public config: ModalConfig;
  public modalRef: ModalRef;
}
