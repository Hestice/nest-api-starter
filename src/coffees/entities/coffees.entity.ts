import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() //pass a 'string' to use a specific name for the table
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column('json', { nullable: true })
  flavors: string[];
}
