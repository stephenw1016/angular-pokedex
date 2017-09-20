import { NgModule } from '@angular/core';
import ListComponent from './list.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import DetailComponent from "../detail/detail.component";

const routes = [
  { path : 'pokemon/details/:id',
    component : DetailComponent
  }

];

@NgModule({
  declarations: [ ListComponent ],
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  exports: [ ListComponent ],
})
export default class ListModule {}
