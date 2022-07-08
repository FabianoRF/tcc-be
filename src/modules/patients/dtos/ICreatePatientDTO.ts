export default interface ICreatePatientDTO {
  nomeRG: string;
  nomeSocial: string;
  nomeMae: string;
  cartaoSUS: string;
  procedencia: string;
  naturalidade: string;
  endereco: string;
  telefone: string;
  dataNasc: Date;
  idade: number;
  genero: string;
  orientacaoSexual: string;
  estadoCivil: string;
  possuiFilhos: boolean;
  qtdFilhos?: number;
  comQuemMora: string;
  tipoMoradia: string;
  alfabetizado: boolean;
  escolaridade: string;
  qualCurso?: string;
  situacaoLaboral: string;
  corEtinia: string;
  religiao: string;

  // caracterizaçao clinica
  fazTratamento: boolean;
  qualTratamento: string;
  fazUsoMedicamento: boolean;
  qualMedicamento: string;
  fazUsoDrogas: boolean;
  quaisDrogas: string;
  quantoTempoUsaDrogas: string;
  perdaRecente: boolean;
  motivoPerdaRecente: string;
  tentativaSuicidio: boolean;
  qtdTentativaSuicidio: number;
  internacoes: boolean;
  quantasInternacoes: boolean;
  historiaSuicidio: boolean;
  parentescoSuicidio: string;
  comoChegou: string;
}
