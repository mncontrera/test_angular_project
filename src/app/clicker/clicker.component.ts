import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.scss']
})
export class ClickerComponent {
  contador = 0;
  //bonus = false;

  @Input() bonus:boolean = false;
  //@Output() valorIncrementado = new EventEmitter<number>();
  @Output() valorIncrementado = new EventEmitter<number>();
  valorClick: number = 0;

  constructor() { }

  sumarValor() {
    this.contador = this.contador + this.valorClick;
    this.valorIncrementado.emit(this.valorClick);
  }


  sumar(cantidad: number): void {
    this.contador = this.contador + cantidad;

    // cuando alcanzamos 10, habilita un botón de bonus
    if (this.contador === 10) {
      this.bonus = true;

      // timeout de 5 segundos, pasado este tiempo el botón volverá a su estado original
      window.setTimeout(() => {
        this.bonus = false;
      }, 5000);
    }
  }

  tablaPuntuaciones = [
    {nombre: 'Juan', puntuacion: 855},
    {nombre: 'Pedro', puntuacion: 803},
    {nombre: 'Luis', puntuacion: 720},
  ];
}
