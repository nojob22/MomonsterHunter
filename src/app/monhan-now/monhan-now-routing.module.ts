import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonhanNowPage } from './monhan-now.page';

const routes: Routes = [
  {
    path: '',
    component: MonhanNowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonhanNowPageRoutingModule {}
