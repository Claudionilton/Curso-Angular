import { Component, effect, Input, OnChanges, OnDestroy, OnInit, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-exemplo',
  standalone: true,
  imports: [],
  templateUrl: './exemplo.component.html',
  styleUrl: './exemplo.component.css'
})
export class ExemploComponent implements OnChanges, OnInit, OnDestroy {

  public titulo = signal<string|number|boolean>('OK')

  @Input() txtTitulo: String = ''
  @Input('sub') subTitulo: String = '' 
  @Input({
    alias:'texto',
    required: true,
  }) texto: String = ''

  constructor(){
    effect(() => {
      //console.log(`Alteração do titulo: ${this.titulo}`);
      console.log(`Constructor`)
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges", changes['txtTitulo'].currentValue)
  }

  ngOnInit(): void {
    console.log("ngOnInit")
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy")
  }

 /* updateTitle(){
    this.titulo.update((value) => {
      return `${value} OK`
    })
  }

  clearTitle(){
    this.titulo.update(() => {
      return ``
    })
  }
*/
}
