import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { LayoutAuthComponent } from './layout-auth/layout-auth.component';
import {CoreModule} from "../core/core.module";
import { ViewsComponent } from './views.component';
import { LayoutLoginComponent } from './layout-login/layout-login.component';
import { LayoutVoituresComponent } from './layout-voitures/layout-voitures.component';
import { LayoutLocationComponent } from './layout-location/layout-location.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    LayoutAuthComponent,
    ViewsComponent,
    LayoutLoginComponent,
    LayoutVoituresComponent,
    LayoutLocationComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    ViewsRoutingModule,
    SharedModule
  ]
})
export class ViewsModule { }
