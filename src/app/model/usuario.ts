import { PessoaFisica } from "./pessoa-fisica";

export interface Usuario {
  id?: number;
  login: string;
  senha: string;
  pessoaFisica: PessoaFisica;
}
