import { Injectable, signal } from '@angular/core';
import { Foto } from '../models/foto';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {
  // 1. STATE (Estado de la aplicación manejado con Signals)
  // Arreglo de fotos (inicialmente vacío para probar el mensaje "No hay fotos")
  readonly fotos = signal<Foto[]>([]);
  
  // Foto que el usuario seleccionó para ver en grande (null si no hay ninguna)
  readonly fotoSeleccionada = signal<Foto | null>(null);
  
  // Controla si el componente Modal de carga está visible o no
  readonly modalCargaAbierto = signal<boolean>(false);

  // 2. ACCIONES (Métodos que modifican los Signals)
  
  // Módulo para agregar una nueva foto a la lista
  agregarFoto(datosFoto: Omit<Foto, 'id'>) {
    const nuevaFoto: Foto = {
      id: Date.now(), // Generamos un ID basado en la fecha actual
      ...datosFoto
    };
    // update() calcula el nuevo estado agregando la foto al arreglo existente
    this.fotos.update(estadoActual => [...estadoActual, nuevaFoto]);
  }

  // Módulo para la vista de detalle
  abrirDetalle(foto: Foto) {
    this.fotoSeleccionada.set(foto); // set() reemplaza el valor por completo
  }

  cerrarDetalle() {
    this.fotoSeleccionada.set(null);
  }

  // Módulo para controlar la visibilidad del modal de carga
  abrirModalCarga() {
    this.modalCargaAbierto.set(true);
  }

  cerrarModalCarga() {
    this.modalCargaAbierto.set(false);
  }
}