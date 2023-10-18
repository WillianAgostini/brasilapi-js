export interface Forecast {
  cidade: string;
  estado: string;
  atualizado_em: string;
  clima: Clima[];
}

export interface Clima {
  data: string;
  condicao: string;
  min: number;
  max: number;
  indice_uv: number;
  condicao_desc: string;
}
