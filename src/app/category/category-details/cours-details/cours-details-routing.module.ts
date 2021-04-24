import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursDetailsPage } from './cours-details.page';

const routes: Routes = [
  {
    path: '',
    component: CoursDetailsPage
  },
  {
    path: ':idChapter',
    loadChildren: () => import('./chapters-details/chapters-details.module').then( m => m.ChaptersDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursDetailsPageRoutingModule {}
