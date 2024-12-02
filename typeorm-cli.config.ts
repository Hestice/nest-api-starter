import { Coffee } from 'src/coffees/entities/coffees.entity';
import { Flavor } from 'src/coffees/entities/flavor.entity';
import { CoffeeRefactor1733106739700 } from 'src/migrations/1733106739700-CoffeeRefactor';
import { SchemaSync1733107588595 } from 'src/migrations/1733107588595-SchemaSync';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1733106739700, SchemaSync1733107588595],
});
