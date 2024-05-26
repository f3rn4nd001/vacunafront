import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistarCURRoutingModule } from "./initcurp-routing.module";
import { RegistrarCitaComponent } from "./initcurp.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import { AutoMunicipioModule } from "../../Plantillas/Autocomplete/auto-municipios/auto-municipio.module";

@NgModule({
    declarations:[
        RegistrarCitaComponent
    ],
    imports:[
        CommonModule,
        RegistarCURRoutingModule,
        FormsModule,
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatStepperModule,
        AutoMunicipioModule,
     ]
})
export class RegistarCURPModule{}