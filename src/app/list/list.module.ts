import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import ListComponent from './list.component';
import SearchModule from "../search/search.module";


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SearchModule
  ],
  declarations: [
    ListComponent
  ],
  exports: [
    ListComponent
  ],
})
export default class ListModule {}
