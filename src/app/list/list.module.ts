import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import ListComponent from './list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ CommonModule, RouterModule ],
  declarations: [ ListComponent ],
  exports: [ ListComponent ],
})
export default class ListModule {}
