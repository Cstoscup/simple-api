import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('todo')
export class TodoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  done: boolean;
}
