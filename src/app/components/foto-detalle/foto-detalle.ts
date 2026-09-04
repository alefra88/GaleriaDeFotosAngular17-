import { Component, inject } from '@angular/core';
import { GaleriaService } from '../../services/galeria';

@Component({
  selector: 'app-foto-detalle',
  standalone: true,
  imports: [],
  templateUrl: './foto-detalle.html'
})
export class FotoDetalleComponent {
  private galeriaService = inject(GaleriaService);

  // Leemos el Signal. Si es 'null', el componente está oculto.
  // Si tiene una foto adentro, el componente se mostrará.
  fotoSeleccionada = this.galeriaService.fotoSeleccionada;

  cerrar() {
    this.galeriaService.cerrarDetalle();
  }
}