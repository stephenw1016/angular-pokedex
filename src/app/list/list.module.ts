import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import ListComponent from './list.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ListComponent
  ],
  exports: [
    ListComponent
  ],
})
export default class ListModule {}
