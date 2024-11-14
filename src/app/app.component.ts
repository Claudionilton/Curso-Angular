import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExemploComponent } from "./exemplo/exemplo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExemploComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto1';
  public subtitulo: String = 'Este é um subtitulo de exemplo'
  public showHideExemplo: boolean = true
  public txtButton: String = 'Trocar'

  public showExemplo(): void {
    this.showHideExemplo = !this.showHideExemplo
  }
}
