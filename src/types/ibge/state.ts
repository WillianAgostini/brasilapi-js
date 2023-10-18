export interface State {
  id: number;
  sigla: string;
  nome: string;
  regiao: Region;
}

export interface Region {
  id: number;
  sigla: string;
  nome: string;
}
