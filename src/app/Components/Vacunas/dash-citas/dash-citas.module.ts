import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashCitasRoutinModule } from "./dash-citas-routing.module";
import { DashCitasComponent } from "./dash-citas.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { odalcCitaModule } from "../modalc-cita/modalc-cita.module";
@NgModule({
    declarations:[
        DashCitasComponent
    ],
    imports:[
        CommonModule,
        DashCitasRoutinModule,
        FormsModule,
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        odalcCitaModule
    ]
})
export class  DashCitasModule{}