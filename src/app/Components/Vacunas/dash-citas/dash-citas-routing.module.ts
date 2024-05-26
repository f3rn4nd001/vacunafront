import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashCitasComponent } from "./dash-citas.component";
import { canActivateGuard } from 'src/app/Services/activate/can-activate.guard';
const routes:Routes=[
    {
        path:'',component:DashCitasComponent,canActivate: [canActivateGuard]
    }
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class DashCitasRoutinModule{}