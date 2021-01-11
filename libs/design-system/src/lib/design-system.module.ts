import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DesignSystemComponent} from './design-system.component';

@NgModule({
  declarations: [DesignSystemComponent],
  exports: [DesignSystemComponent],
  imports: [CommonModule],
})
export class DesignSystemModule {}
