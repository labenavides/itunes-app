import { Song } from "./song"

export interface Response {
  total_albumes: number;
  total_canciones: number;
  albumes: Array<String>;
  canciones: [ Song ];
}
