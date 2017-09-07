import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import ListComponent from './list/list.component';
import IntroComponent from './intro/intro.component';

const routes: Routes = [
	{ path: '', component: IntroComponent },
	{ path: 'home', component: ListComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}