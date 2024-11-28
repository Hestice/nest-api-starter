import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeaController } from './tea/tea.controller';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CoffeesModule,
    TypeOrmModule.forRoot({
      type: 'postgres', //type of database
      host: 'localhost', //db host
      port: 5432, // port for db host
      username: 'postgres',
      password: 'pass123',
      database: 'postgres', //name of db
      autoLoadEntities: true, //load the models automatically
      synchronize: true, //set to false in prod, sync the entitites with database
    }),
  ],
  controllers: [AppController, TeaController],
  providers: [AppService],
})
export class AppModule {}
