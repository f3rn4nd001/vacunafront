import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/app/environments/environment';
import { AlertServerService } from '../../Alert/alert-server.service';
import { SpinerService } from "../../loadin/spiner.service";

@Injectable({
  providedIn: 'root'
})
export class GenerarService {

  constructor(
    private _service:AlertServerService,
    public _SpinerService:SpinerService

  ) { }

  getRegistrosCompremento(data:any){    
    var api = `${environment.direcurl}${data.urls}`;	
    let json=JSON.stringify(data);
    return new Promise( ( resolve, reject ) => { 
      axios.post(api,{datos:json,headers:environment})
      .then(response => {        
          resolve(response.data);   
      }).catch(error => {   
        reject(error);
        if (error.response) {
          this._service.validaderrores(error.response);
      
        } else if (error.request) {
          this._service.validaderrores(error.request);
        } else {
          console.log('Error', error.message);
        }
      });
    });
  }

  getRegistros(data:any){    
    var api = `${environment.direcurl}${data.urls}`;	
    this._SpinerService.llamarspiner();
    let json=JSON.stringify(data);
    var ecodUsuario =data.ecodUsuario;	
    var token = data.tokencontroll;	
    return new Promise( ( resolve, reject ) => { 
      axios.post(api,{datos:json,headers:{'ecodUsuario':ecodUsuario,'token':token}})
      .then(response => {        
          resolve(response.data);   
          this._SpinerService.detenerspiner();
          this._service.validaderrores(response);
      }).catch(error => {   
        this._SpinerService.detenerspiner();
        reject(error);
        if (error.response) {
          this._service.validaderrores(error.response);
      
        } else if (error.request) {
          this._service.validaderrores(error.request);
        } else {
          console.log('Error', error.message);
        }
      });
    });
  }

  postRegistrar(data:any){
    var api = `${environment.direcurl}${data.urls}`;	
    this._SpinerService.llamarspiner();
    var tokencontroll=data.tokencontroll
    let json=JSON.stringify(data);
    return new Promise( ( resolve, reject ) => { 
      axios.post(api,{datos:json,headers:environment.header,tokencontroll})
      .then(response => {        
          resolve(response.data);   
          this._SpinerService.detenerspiner();
          this._service.validaderrores(response);
      }).catch(error => {   
        this._SpinerService.detenerspiner();
        reject(error);
        if (error.response) {
          this._service.validaderrores(error.response);
      
        } else if (error.request) {
          this._service.validaderrores(error.request);
        } else {
          console.log('Error', error.message);
        }
      });
    });
  }
}
