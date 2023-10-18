export interface Oceans {
  cidade: string;
  estado: string;
  atualizado_em: string;
  ondas: Ocean[];
}

export interface Ocean {
  data: string;
  dados_ondas: OceanData[];
}

export interface OceanData {
  vento: number;
  direcao_vento: string;
  direcao_vento_desc: string;
  altura_onda: number;
  direcao_onda: string;
  direcao_onda_desc: string;
  agitacao: string;
  hora: string;
}
