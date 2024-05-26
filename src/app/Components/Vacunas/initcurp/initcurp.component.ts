import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, MaxLengthValidator, Validators} from '@angular/forms';
import { ServicesService } from "../../Plantillas/services/services.service";
import { AlertServerService } from 'src/app/Services/Alert/alert-server.service';
import { Router } from '@angular/router';
import { GenerarService } from 'src/app/Services/Catalogo/Generar/generar.service';

@Component({
  selector: 'app-registrar-cita',
  templateUrl: './initcurp.component.html',
  styleUrls: ['./initcurp.component.css']
})
export class RegistrarCitaComponent implements OnInit {
  firstFormGroup:any = FormGroup;
  secondFormGroup:any = FormGroup;
  isEditable = true;
  public datos: any = {};
  public validadCURP = 0;
  public validadMunicipio=0;
  public data:any={};

  constructor(
    private _formBuilder: FormBuilder,
    private _ServicesService:ServicesService,
    private _serviceAlert: AlertServerService,
    public router: Router,
    private _GenerarService:GenerarService,

  ) {}
  
  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      tCURP:new FormControl('',[ Validators.required , Validators.maxLength(18), Validators.minLength(18) ])
    });
    this.datos = this._formBuilder.group({
      ecodMunicipio2:new FormControl('',[ Validators.required ])
    });
    this._ServicesService.diaparadorAutocomprit.subscribe(res=>{        
      if (res.Municipio) {
        this.datos.ecodMunicipio=res.Municipio.ecod;
        this.datos.ecodMunicipio2=res.Municipio.ecod;
        this.datos.tNombreMunicipio=res.Municipio.tNombre;
        localStorage.setItem('tNombreMunicipio', JSON.stringify(res.Municipio.tNombre));
        if ((this.datos.ecodMunicipio2 == null) || (this.datos.ecodMunicipio2 == '')) {this.validadMunicipio=0}
        else{this.validadMunicipio=1}
      }
    }); 
  }

  mayusculaCURP() {    
    let cadena:any = this.firstFormGroup.value.tCURP;
    let mayusculas = cadena.toUpperCase();
	  this.datos.tCURP=mayusculas
    this.validadCURP=0;
    if (mayusculas.length == 18) {
       if(this.digitoVerificadorCURP(mayusculas) == true){
        this.validadCURP=1;
      }
    }
	}

  digitoVerificadorCURP(curp:any) {
    var re = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/,
    validado = curp.match(re);
    if (!validado)
    	return false;
    function digitoVerificador(curp17:any) {
        var diccionario  = "0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ",
            lngSuma      = 0.0,
            lngDigito    = 0.0;
        for(var i=0; i<17; i++)
            lngSuma = lngSuma + diccionario.indexOf(curp17.charAt(i)) * (18 - i);
        lngDigito = 10 - lngSuma % 10;
        if (lngDigito == 10) return 0;
        return lngDigito;
    }
    if (validado[2] != digitoVerificador(validado[1])) {return false;} 
    return true;
  }

  Guardar(){
    
              
    let errorsMensaje=[];
    let bandera=0;
    if ((this.datos.ecodMunicipio == null) || (this.datos.ecodMunicipio == '')) {
      errorsMensaje.push("El municipio no puede estar vacio");
    }
    if ((this.firstFormGroup.value.tCURP == null) || (this.firstFormGroup.value.tCURP == '')) {
       errorsMensaje.push("<br>No se encontro la CURP");
    }
    
    if(errorsMensaje.length>0){
      this._serviceAlert.ErrorGuardar(errorsMensaje);
      bandera = 1;
    }

    if (bandera == 0) {
      this.data.Usuario = this.firstFormGroup.value;
      this.data.Usuario.ecodMunicipio = this.datos.ecodMunicipio;
      this.data.urls="catalogo/usuario/registrar";
      this._GenerarService.postRegistrar(this.data).then((response:any)=>{
        localStorage.setItem('ecodUsuario', JSON.stringify(response.ecodUsuario));
        localStorage.setItem('token', JSON.stringify(response.token));
        this.router.navigate(['vacunas/citas']);      
      });
      
    }
  }
}
