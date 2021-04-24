import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursDetailsPageRoutingModule } from './cours-details-routing.module';

import { CoursDetailsPage } from './cours-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursDetailsPageRoutingModule
  ],
  declarations: [CoursDetailsPage]
})
export class CoursDetailsPageModule {}
