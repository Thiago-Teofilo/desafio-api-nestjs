import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['email', 'cpf'])
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  fullname: string;

  @Column({ unique: true })
  email: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  genre: string;

  @Column({ unique: true })
  cpf: string;
}
