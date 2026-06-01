import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    //TO read ".env files"
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    //Mongodb initalization
    // MongooseModule.forRoot('mongodb+srv://subugee:subugee222@cluster0.shfpbhv.mongodb.net/MyDatabaseDemo?retryWrites=true&w=majority&appName=Cluster0'),
    MongooseModule.forRootAsync({
      inject: [ConfigService], //dependency injection
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
    }),

    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
