import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreatePatients1657152853461 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'patients',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'nome_rg',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'nome_social',
            type: 'varchar',
          },
          {
            name: 'nome_mae',
            type: 'varchar',
          },
          {
            name: 'cartao_sus',
            type: 'varchar',
          },
          {
            name: 'procedencia',
            type: 'varchar',
          },
          {
            name: 'naturalidade',
            type: 'varchar',
          },
          {
            name: 'endereco',
            type: 'varchar',
          },
          {
            name: 'telefone',
            type: 'varchar',
          },
          {
            name: 'data_nasc',
            type: 'timestamp',
          },
          {
            name: 'idade',
            type: 'int',
          },
          {
            name: 'genero',
            type: 'varchar',
          },
          {
            name: 'orientacao_sexual',
            type: 'varchar',
          },
          {
            name: 'estadoCivil',
            type: 'varchar',
          },
          {
            name: 'possui_filhos',
            type: 'varchar',
          },
          {
            name: 'qtd_filhos',
            type: 'varchar',
          },
          {
            name: 'com_quem_mora',
            type: 'varchar',
          },
          {
            name: 'tipo_moradia',
            type: 'varchar',
          },
          {
            name: 'alfabetizado',
            type: 'boolean',
          },
          {
            name: 'escolaridade',
            type: 'varchar',
          },
          {
            name: 'qual_curso',
            type: 'varchar',
          },
          {
            name: 'situacao_laboral',
            type: 'varchar',
          },
          {
            name: 'cor_etinia',
            type: 'varchar',
          },
          {
            name: 'religiao',
            type: 'varchar',
          },
          // caracterização clinica
          {
            name: 'faz_tratamento',
            type: 'boolean',
          },
          {
            name: 'qual_tratamento',
            type: 'varchar',
          },
          {
            name: 'faz_uso_medicamento',
            type: 'boolean',
          },
          {
            name: 'qual_medicamento',
            type: 'varchar',
          },
          {
            name: 'faz_uso_drogas',
            type: 'boolean',
          },
          {
            name: 'quais_drogas',
            type: 'varchar',
          },
          {
            name: 'quanto_tempo_usa_drogas',
            type: 'varchar',
          },
          {
            name: 'perda_recente',
            type: 'boolean',
          },
          {
            name: 'motivo_perda_recente',
            type: 'varchar',
          },
          {
            name: 'tentativa_suicidio',
            type: 'boolean',
          },
          {
            name: 'qtd_tentativa_suicidio',
            type: 'integer',
          },
          {
            name: 'internacoes',
            type: 'boolean',
          },
          {
            name: 'quantas_internacoes',
            type: 'varchar',
          },
          {
            name: 'historia_suicidio',
            type: 'boolean',
          },
          {
            name: 'parentesco_suicidio',
            type: 'varchar',
          },
          {
            name: 'como_chegou',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('patients');
  }
}
