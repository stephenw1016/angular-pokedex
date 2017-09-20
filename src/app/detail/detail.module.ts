import {NgModule} from '@angular/core';
import DetailComponent from './detail.component';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [DetailComponent],
    exports: [DetailComponent]
})

export default class DetailModule {

}