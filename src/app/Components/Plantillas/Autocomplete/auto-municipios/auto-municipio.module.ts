import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoMunicipiosComponent } from "./auto-municipios.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    declarations:[
        AutoMunicipiosComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatAutocompleteModule,
    ],
    exports: [
        AutoMunicipiosComponent
    ]
})
export class AutoMunicipioModule{}