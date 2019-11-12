import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'Sign-in', loadChildren: './sign-up/sign-up.module#SignUpModule' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'homepage1', loadChildren: './homepage1/homepage1.module#Homepage1Module' },
  { path: '', redirectTo: 'Sign-in', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
