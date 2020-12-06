import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FocusBackModule } from 'src/app/shared/directives/focus-back/focus-back/focus-back.module';
import { FocusTrapModule } from 'src/app/shared/directives/focus-trap/focus-trap.module';

import { ModalComponent } from './modal.component';
import { ModalService } from './services/modal.service';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, FocusTrapModule, FocusBackModule],
  providers: [ModalService],
})
export class ModalModule {}
