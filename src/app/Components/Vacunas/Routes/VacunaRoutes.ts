import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule  } from "@angular/router";

const VacunasRouting:ModuleWithProviders<any>=RouterModule.forRoot([
    {path:'', loadChildren:()=>import('../initcurp/initcurp.module').then(m=>m.RegistarCURPModule)},
    {path:'vacunas/citas', loadChildren:()=>import('../dash-citas/dash-citas.module').then(m=>m.DashCitasModule)},
      
]);

export var objRutasVacunas=[
    VacunasRouting
]