import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  @Output() parametrosSeleccionados = new EventEmitter<any>()

  categoriaSeleccionada = 'general'
  paisSeleccionado = 'co'

  categorias: any[] = [
    {value: 'general', nombre: 'General'},
    {value: 'business', nombre: 'Negocios'},
    {value: 'entertainment', nombre: 'Entretenimiento'},
    {value: 'health', nombre: 'Salud'},
    {value: 'sports', nombre: 'Deportes'},
    {value: 'technology', nombre: 'Tecnología'}
  ]

  paises: any[] =[
    {value: 'co', nombre: 'Colombia'},
    {value: 'mx', nombre: 'Mexico'},
    {value: 'ar', nombre: 'Argentina'},
    {value: 've', nombre: 'Venezuela'}
  ]

  constructor (){}

  ngOnInit(): void {

  }

  buscarNoticia(){
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    }
    this.parametrosSeleccionados.emit(PARAMETROS)
  }
}

