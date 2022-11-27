import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardVehiculeComponent } from './card-vehicule/card-vehicule.component';
import {RouterModule} from "@angular/router";



@NgModule({
    declarations: [
        CardVehiculeComponent
    ],
    exports: [
        CardVehiculeComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SharedModule { }
