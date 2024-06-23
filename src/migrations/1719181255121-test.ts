import { MigrationInterface, QueryRunner } from 'typeorm';

export class Test1719181255121 implements MigrationInterface {
  name = 'Test1719181255121';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "todo" ADD "createdAt" TIMESTAMP DEFAULT now()`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "createdAt"`);
  }
}
