import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { AlertErrorComponent } from './alert/alert-error.component';

/**
 * Application wide Module
 */
@NgModule({
  imports: [AlertComponent, AlertErrorComponent],
  exports: [CommonModule, AlertComponent, AlertErrorComponent],
})
export default class SharedModule {}
