import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'; // RÚBRICA: Necesario para ngModel
import { GaleriaService } from '../../services/galeria';
import { Foto } from '../../models/foto';

@Component({
  selector: 'app-carga-fotos',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './carga-fotos.html'
})
export class CargaFotosComponent {
  private galeriaService = inject(GaleriaService);

  // Leemos el Signal del servicio para saber si el modal debe verse o no
  abierto = this.galeriaService.modalCargaAbierto;

  // Variable temporal para el Binding Bidireccional
  nuevaFoto = {
    titulo: '',
    url: '',
    descripcion: '',
    tipo: 'otro' as Foto['tipo']
  };

  guardar() {
    // Validación básica
    if (!this.nuevaFoto.titulo.trim() || !this.nuevaFoto.url.trim()) return;

    // Enviamos la foto al servicio
    this.galeriaService.agregarFoto(this.nuevaFoto);
    this.cerrar();
  }

  cerrar() {
    this.galeriaService.cerrarModalCarga();
    // Limpiamos el formulario para la próxima vez
    this.nuevaFoto = { titulo: '', url: '', descripcion: '', tipo: 'otro' };
  }
}