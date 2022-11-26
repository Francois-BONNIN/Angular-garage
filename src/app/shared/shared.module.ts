import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardVehiculeComponent } from './card-vehicule/card-vehicule.component';



@NgModule({
    declarations: [
        CardVehiculeComponent
    ],
    exports: [
        CardVehiculeComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
