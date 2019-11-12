import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Homepage1RoutingModule } from './homepage1-routing.module';
import { Homepage1Component } from './homepage1.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [Homepage1Component],
  imports: [
    CommonModule,
    Homepage1RoutingModule,
    SharedModule
  ]
})
export class Homepage1Module { }
