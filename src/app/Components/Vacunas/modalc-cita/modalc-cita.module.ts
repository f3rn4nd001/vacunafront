import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalcCitaComponent } from './modalc-cita.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
    declarations:[
        ModalcCitaComponent,
        
    ],
    imports:[
        CommonModule,
        MatDialogModule,
        MatPaginatorModule,
        FormsModule,
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule,
    ],
    exports: [
        ModalcCitaComponent
    ]
})
export class odalcCitaModule{}