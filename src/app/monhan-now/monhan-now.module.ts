import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonhanNowPageRoutingModule } from './monhan-now-routing.module';

import { MonhanNowPage } from './monhan-now.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonhanNowPageRoutingModule
  ],
  declarations: [MonhanNowPage]
})
export class MonhanNowPageModule {}
