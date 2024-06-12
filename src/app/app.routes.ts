import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StandardComponent } from './calculators/standard/standard.component';
import { ScientificComponent } from './calculators/scientific/scientific.component';
export const routes: Routes = [
  { path: 'standard', component: StandardComponent },
  { path: 'scientific', component: ScientificComponent },
  { path: '', redirectTo: '/standard', pathMatch: 'full' },
  { path: '**', redirectTo: '/standard', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }