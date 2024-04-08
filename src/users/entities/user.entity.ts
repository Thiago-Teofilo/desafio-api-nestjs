import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  fullname: string;

  @Column()
  email: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  genre: string;

  @Column()
  cpf: string;
}
