import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/ads', pathMatch: 'full' },
  { 
    path: 'ads', 
    loadChildren: () => import('./features/ads/ads.module').then(m => m.AdsModule)
  },
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }