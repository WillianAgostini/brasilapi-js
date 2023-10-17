export interface Ondas {
  cidade: string;
  estado: string;
  atualizado_em: string;
  ondas: Onda[];
}

export interface Onda {
  data: string;
  dados_ondas: DadosOnda[];
}

export interface DadosOnda {
  vento: number;
  direcao_vento: string;
  direcao_vento_desc: string;
  altura_onda: number;
  direcao_onda: string;
  direcao_onda_desc: string;
  agitacao: string;
  hora: string;
}
