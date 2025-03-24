export interface Exchange {
  cotacoes: Rate[];
  moeda: string;
  data: string;
}

export interface Rate {
  paridade_compra: number;
  paridade_venda: number;
  cotacao_compra: number;
  cotacao_venda: number;
  data_hora_cotacao: string;
  tipo_boletim: string;
}
