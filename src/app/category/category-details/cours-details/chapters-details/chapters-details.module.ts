import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChaptersDetailsPageRoutingModule } from './chapters-details-routing.module';

import { ChaptersDetailsPage } from './chapters-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChaptersDetailsPageRoutingModule
  ],
  declarations: [ChaptersDetailsPage]
})
export class ChaptersDetailsPageModule {}
