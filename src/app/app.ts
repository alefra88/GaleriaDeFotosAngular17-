import { Component } from '@angular/core';
import { GaleriaComponent } from './components/galeria/galeria';
import { CargaFotosComponent } from './components/carga-fotos/carga-fotos'; // <-- importando
import { FotoDetalleComponent } from './components/foto-detalle/foto-detalle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GaleriaComponent, CargaFotosComponent, FotoDetalleComponent], // ahora también importamos FotoDetalleComponent
  templateUrl: './app.html'
})
export class App {
}