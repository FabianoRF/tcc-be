import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('patients')
class Patient {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({ name: 'nome_rg' })
  nomeRG: string;

  @Column({ name: 'nome_social' })
  nomeSocial: string;
  
  @Column({ name: 'nome_mae' })
  nomeMae: string;
  
  @Column({ name: 'cartao_sus' })
  cartaoSUS: string;
  
  @Column({ name: 'procedencia' })
  procedencia: string;
  
  @Column({ name: 'naturalidade' })
  naturalidade: string;
  
  @Column({ name: 'endereco' })
  endereco: string;
  
  @Column({ name: 'telefone' })
  telefone: string;
  
  @Column({ name: 'data_nasc' })
  dataNasc: Date;
  
  @Column({ name: 'idade' })
  idade: number;
  
  @Column({ name: 'genero' })
  genero: string;
  
  @Column({ name: 'orientacao_sexual' })
  orientacaoSexual: string;
  
  @Column({ name: 'estado_civil' })
  estadoCivil: string;
  
  @Column({ name: 'possui_filhos' })
  possuiFilhos: boolean;
  
  @Column({ name: 'qtd_filhos' })
  qtdFilhos: number;
  
  @Column({ name: 'com_quem_mora' })
  comQuemMora: string;
  
  @Column({ name: 'tipo_moradia' })
  tipoMoradia: string;
  
  @Column({ name: 'alfabetizado' })
  alfabetizado: boolean;
  
  @Column({ name: 'escolaridade' })
  escolaridade: string;
  
  @Column({ name: 'qual_curso' })
  qualCurso: string;
  
  @Column({ name: 'situacao_laboral' })
  situacaoLaboral: string;
  
  @Column({ name: 'cor_etinia' })
  corEtinia: string;
  
  @Column({ name: 'religiao' })
  religiao: string;

  // caracterização clinica
  @Column({ name: 'faz_tratamento' })
  fazTratamento: boolean;
  
  @Column({ name: 'qual_tratamento' })
  qualTratamento: string;
  
  @Column({ name: 'faz_uso_medicamento' })
  fazUsoMedicamento: boolean;
  
  @Column({ name: 'qual_medicamento' })
  qualMedicamento: string;
  
  @Column({ name: 'faz_uso_drogas' })
  fazUsoDrogas: boolean;
  
  @Column({ name: 'quais_drogas' })
  quaisDrogas: string;
  
  @Column({ name: 'quanto_tempo_usa_drogas' })
  quantoTempoUsaDrogas: string;
  
  @Column({ name: 'perda_recente' })
  perdaRecente: boolean;
  
  @Column({ name: 'motivo_perda_recente' })
  motivoPerdaRecente: string;
  
  @Column({ name: 'tentativa_suicidio' })
  tentativaSuicidio: boolean;
  
  @Column({ name: 'qtd_tentativa_suicidio' })
  qtdTentativaSuicidio: number;
  
  @Column({ name: 'internacoes' })
  internacoes: boolean;
  
  @Column({ name: 'quantas_internacoes' })
  quantasInternacoes: string;
  
  @Column({ name: 'historia_suicidio' })
  historiaSuicidio: boolean;
  
  @Column({ name: 'parentesco_suicidio' })
  parentescoSuicidio: string;
  
  @Column({ name: 'como_chegou' })
  comoChegou: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Patient;
