import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChaptersDetailsPage } from './chapters-details.page';

const routes: Routes = [
  {
    path: '',
    component: ChaptersDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChaptersDetailsPageRoutingModule {}
