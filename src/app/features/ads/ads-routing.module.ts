import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdListComponent } from './components/ad-list/ad-list.component';
import { AdsContainerComponent } from './ads-container/ads-container.component';
import { PostAdComponent } from './components/post-ad/post-ad.component';
import { authGuard } from 'src/app/auth.guard';
import { ViewAdComponent } from './components/view-ad/view-ad.component';
import { EditAdComponent } from './components/edit-ad/edit-ad.component';

const routes: Routes = [
  { path: '', component: AdsContainerComponent,},
  { path: 'post-ad', component: PostAdComponent, canActivate: [authGuard]  },
  { path: 'view-ad/:adId', component: ViewAdComponent },
  { path: 'edit-ad/:id', component: EditAdComponent },
  { path: 'favorites/:userId', component: AdsContainerComponent, canActivate: [authGuard]},
  { path: 'userlistings/:userId', component: AdsContainerComponent, canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdsRoutingModule { }
