import { NgModule } from '@angular/core';
import IntroComponent from './intro.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ IntroComponent ],
  imports: [ CommonModule ],
  exports: [ IntroComponent ]
})
export default class IntroModule {}
