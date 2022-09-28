export interface Song {
  cancion_id: number;
  nombre_album: string;
  nombre_tema: string;
  preview_url: string;
  fecha_lanzamiento: Date;
  precio: {
    _valor: number;
    _moneda: string;
  }
}
