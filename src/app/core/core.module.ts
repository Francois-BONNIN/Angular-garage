import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';



@NgModule({
    declarations: [
        AuthFormComponent,
        RegisterFormComponent
    ],
    exports: [
        AuthFormComponent, RegisterFormComponent
    ],
    imports: [
        CommonModule
    ]
})
export class CoreModule { }
