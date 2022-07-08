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
            isNullable: true,
          },
          {
            name: 'naturalidade',
            type: 'varchar',
          },
          {
            name: 'endereco',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'telefone',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'data_nasc',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'idade',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'genero',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'orientacao_sexual',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'estado_civil',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'possui_filhos',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'qtd_filhos',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'com_quem_mora',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'tipo_moradia',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'alfabetizado',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'escolaridade',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'qual_curso',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'situacao_laboral',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'cor_etinia',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'religiao',
            type: 'varchar',
            isNullable: true,
          },
          // caracterização clinica
          {
            name: 'faz_tratamento',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'qual_tratamento',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'faz_uso_medicamento',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'qual_medicamento',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'faz_uso_drogas',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'quais_drogas',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'quanto_tempo_usa_drogas',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'perda_recente',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'motivo_perda_recente',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'tentativa_suicidio',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'qtd_tentativa_suicidio',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'internacoes',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'quantas_internacoes',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'historia_suicidio',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'parentesco_suicidio',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'como_chegou',
            type: 'varchar',
            isNullable: true,
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
