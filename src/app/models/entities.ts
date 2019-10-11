export interface Prom {
    _id: string;
    titulo: string;
    descricao: string;
    img: string[];
    data: Date;
    dataFinal: Date;
    autor: User;
    loja: string;
    arquivo: string[];
    isEvent: boolean;
  }
export interface User {
    _id: string;
    nome: string;
    loja: string;
    email: string;
    senha: string;
    nivel: number;
}

