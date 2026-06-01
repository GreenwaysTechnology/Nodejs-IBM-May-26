import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GreeterModule } from './greeter/greeter.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [GreeterModule, UsersModule, ProductsModule], //all submodules will go here
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
