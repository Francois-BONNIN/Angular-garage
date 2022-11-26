import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutAuthComponent} from "./layout-auth/layout-auth.component";
import {LayoutLoginComponent} from "./layout-login/layout-login.component";
import {LayoutVoituresComponent} from "./layout-voitures/layout-voitures.component";
import {LayoutLocationComponent} from "./layout-location/layout-location.component";

const routes: Routes = [
  {
    path: 'login',
    component: LayoutLoginComponent,
  },
  {
    path: 'register',
    component: LayoutAuthComponent,
  },
  {
    path: 'voitures',
    component: LayoutVoituresComponent,
  },
  {
    path: 'locations',
    component: LayoutLocationComponent,
  },
  {
    path: '', redirectTo: '/login'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
