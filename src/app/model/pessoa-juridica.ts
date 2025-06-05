import { Pessoa } from "./pessoa.model";

export interface PessoaJuridica extends Pessoa {

  cnpj: string;
  inscEstadual: string;
  inscMunicipal: string;
  nomeFantasia: string;
  razaoSocial: string;
}
