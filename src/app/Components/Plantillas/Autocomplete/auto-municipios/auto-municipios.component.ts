import { Component,OnInit } from '@angular/core';
import { ServicesService } from "../../services/services.service";
import { GenerarService } from "../../../../Services/Catalogo/Generar/generar.service";
import { FormControl } from '@angular/forms';
import { Observable,map, startWith  } from 'rxjs';
@Component({
  selector: 'app-auto-municipios',
  templateUrl: './auto-municipios.component.html',
  styleUrls: ['./auto-municipios.component.css']
})
export class AutoMunicipiosComponent implements OnInit {
  ecodctl = new FormControl('',[]);
  filteredStates: Observable<any[]>;
  public datos: any = {};
  public metodos: any = {eNumeroRegistros:10, tMetodoOrdenamiento:'ecodMunicipio ', orden:'DESC' };
  public states: any= [];
  public envio: any = {filtros:{}};

  constructor(
    private _ServicesService:ServicesService,
    private _GenerarService:GenerarService
  ) { 
    this.filteredStates = this.ecodctl.valueChanges.pipe(startWith(''),map(state => (state ? this._filterStates(state) : this.states.slice())),);
  }

  ngOnInit(): void {
    this._ServicesService.diaparadorAutocomprit.subscribe(res=>{
      if (res.Municipio) {
        this.datos.tNombre=res.Municipio.tNombre;
        this.datos.ecod=res.Municipio.ecod;
      } 
    });         
    this._filterStates(this.datos);    
  }
  displayStates(data: any): string {return data.tNombre ? data.tNombre : data;}

  selectopcion(){
    this._ServicesService.diaparadorAutocomprit.emit({Municipio:this.ecodctl.value})    
  }

  private _filterStates(event: any) {
    try {   
      this.states=[];
      this.envio.metodos=this.metodos;
      this.envio.urls="catalogo/municipios/compremento";
      this.envio.filtros.tNombre=event
      if (event != '' && typeof event === 'string') {
        this._GenerarService.getRegistrosCompremento(this.envio).then((response:any)=>{  
          this.states.push({
            tNombre:' ',
            ecod: null,
          })    
          response.forEach((element:any) => {
            this.states.push({
              tNombre:element.tNombre,
              ecod:element.ecodMunicipio,
            })        
          });
          
        })  
      }
      return this.states;
    } catch (e) {
      console.error('Error al filtrar', e);
    }
  }
}
