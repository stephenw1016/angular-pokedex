import { NgModule } from '@angular/core';
import DetailComponent from "./detail/detail.component";
import ListComponent from "./list/list.component";
import { RouterModule } from '@angular/router';

const routes = [
  { 
  	path : 'pokemon/details/:id',
    component : DetailComponent
  },
  {
    path: '**',
    component : ListComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export default class AppRoutingModule{}