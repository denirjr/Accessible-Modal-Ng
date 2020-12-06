import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FocusTrapModule } from 'src/app/shared/directives/focus-trap/focus-trap/focus-trap.module';

import { ModalComponent } from './modal.component';
import { ModalService } from './services/modal.service';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, FocusTrapModule],
  providers: [ModalService],
})
export class ModalModule {}
