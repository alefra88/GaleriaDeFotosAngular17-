export interface Foto {
  id: number;
  titulo: string;
  url: string;
  descripcion: string;
  // Este metadato nos servirá para cumplir el requerimiento del @switch
  tipo: 'retrato' | 'paisaje' | 'macro' | 'otro'; 
}