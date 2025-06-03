import { Pessoa } from "./pessoa";

export interface PessoaFisica extends Pessoa {

  //id?: number;
  cpf: string;
  rg: string;
  //estadoCivil: string;
}
