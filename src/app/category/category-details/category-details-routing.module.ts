import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryDetailsPage } from './category-details.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryDetailsPage
  },
  {
    path: ':idCours',
    loadChildren: () => import('./cours-details/cours-details.module').then( m => m.CoursDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryDetailsPageRoutingModule {}
