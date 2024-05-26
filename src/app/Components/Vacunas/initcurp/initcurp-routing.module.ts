import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarCitaComponent } from "./initcurp.component";
const routes:Routes=[
    {
        path:'',component:RegistrarCitaComponent
    }
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class RegistarCURRoutingModule{}