import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from './datasource/typeorm.module';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [TypeOrmModule, TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
