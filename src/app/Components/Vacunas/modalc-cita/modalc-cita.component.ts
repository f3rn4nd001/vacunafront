import { Component, OnInit, Inject,ViewChild } from '@angular/core';
import {MatDialogModule,MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { GenerarService } from 'src/app/Services/Catalogo/Generar/generar.service';

@Component({
  selector: 'app-modalc-cita',
  templateUrl: './modalc-cita.component.html',
  styleUrls: ['./modalc-cita.component.css']
})
export class ModalcCitaComponent implements OnInit{
  public title: string = "";
  public datos: any = {};

  constructor( 
    private _GenerarService:GenerarService,
    public dialogRef: MatDialogRef<ModalcCitaComponent>,   
    @Inject(MAT_DIALOG_DATA) public data: any){
    this.title = this.data.titulo;
    this.datos.Folio = this.data.Folio;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  cancelarcita(){
    this.data.relusercita = this.datos.Folio;
    this.data.urls="relcitauser/eliminar";
    this._GenerarService.postRegistrar(this.data).then((response:any)=>{
      this.onNoClick();
    })
  }
}
