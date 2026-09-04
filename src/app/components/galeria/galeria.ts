import { Component, inject } from '@angular/core';
import { GaleriaService } from '../../services/galeria';
import { Foto } from '../../models/foto';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [], 
  templateUrl: './galeria.html'
})
export class GaleriaComponent {
  // Inyectamos el servicio central
  private galeriaService = inject(GaleriaService);

  // Exponemos el Signal de fotos hacia nuestro HTML
  fotos = this.galeriaService.fotos;

  // Acción para abrir el modal de carga
  abrirModal() {
    this.galeriaService.abrirModalCarga();
  }

  // Acción para seleccionar una foto y ver su detalle
  seleccionarFoto(foto: Foto) {
    this.galeriaService.abrirDetalle(foto);
  }
}