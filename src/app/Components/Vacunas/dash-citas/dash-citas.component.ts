import { Component, OnInit } from '@angular/core';
import { GenerarService } from 'src/app/Services/Catalogo/Generar/generar.service';
import { ServicesService } from '../../Plantillas/services/services.service';
import { ModalcCitaComponent } from '../modalc-cita/modalc-cita.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-citas',
  templateUrl: './dash-citas.component.html',
  styleUrls: ['./dash-citas.component.css']
})
export class DashCitasComponent implements OnInit {
  public ecodUsuario : any=''
  public tokencontroll: any = "";
  public Municipio: any = "";
  public envio: any = {};
  public datosCitas : any = '';
  public datos: any = {};
  public metodos: any = { tMetodoOrdenamiento:'ecodfechas', orden:'DESC' };
  public filtroForm: any = {ecodUsuario:'', estatus:'Activo'};
  public data:any={};

  constructor(
    private _ServicesService:ServicesService,
    private _GenerarService:GenerarService,
    public dialog: MatDialog,
    public router: Router,

  ) { }

  ngOnInit(): void {
    this.ecodUsuario = localStorage.getItem('ecodUsuario');  
    this.tokencontroll = localStorage.getItem('token');  
    this.Municipio = localStorage.getItem('tNombreMunicipio');  
    if (this.ecodUsuario && this.tokencontroll) {
      this.getEditarRegistro();
    }
  }
  
  getEditarRegistro(){
    this.envio.metodos=this.metodos;
    this.envio.data=this.ecodUsuario;
    this.filtroForm.ecodUsuario=localStorage.getItem('ecodUsuario')
    this.envio.filtros = this.filtroForm;
    this.envio.ecodUsuario = localStorage.getItem('ecodUsuario');
    this.envio.tokencontroll = localStorage.getItem('token'); 
    this.envio.urls="catalogo/usuario/vacunas/citas";
    this._GenerarService.getRegistros(this.envio).then((response:any)=>{  
      this.datosCitas = (response);   
      this.datos.tCURP = this.datosCitas.sqinfuserl[0].tCURP;   
      this.datos.NombreUsuario = this.datosCitas.sqinfuserl[0].NombreUsuario;          
    });
  }

  cancelarcita(){
      let dialogRef = this.dialog.open(ModalcCitaComponent, {
        data: {  titulo: "Quiero cancelar mi cita",Folio:this.datosCitas.sql[0].ecodrelusuariofecha}
      });
        dialogRef.afterClosed().subscribe(result => { 
          this.router.navigate(['vacunas/citas']);      
        });

  }
}
