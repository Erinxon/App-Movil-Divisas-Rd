import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DivisasPageRoutingModule } from './divisas-routing.module';

import { DivisasPage } from './divisas.page';
import { LoadingComponent } from '../loading/loading.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DivisasPageRoutingModule
  ],
  declarations: [DivisasPage, LoadingComponent]
})
export class DivisasPageModule {}
