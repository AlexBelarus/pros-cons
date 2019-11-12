import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Homepage1Component } from './homepage1.component';

const routes: Routes = [
  { path: '', component: Homepage1Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Homepage1RoutingModule { }
