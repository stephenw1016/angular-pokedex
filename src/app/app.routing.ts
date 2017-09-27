import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import DetailComponent from './detail/detail.component';
import ListComponent from './list/list.component';


const routes = [
  { path: 'pokemon/details/:id', component: DetailComponent },
  { path: 'pokemon', component: ListComponent },
  { path: '**', redirectTo: 'pokemon', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export default class AppRoutingModule {}