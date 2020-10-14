import { CacheModule, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './microservices/auth/auth.module';
import { CustomerModule } from './microservices/customer/customer.module';
import { MailModule } from './microservices/mail/mail.module';
import { GqlConfigService } from 'src/graphql/gql-config.service';
import { BookingModule } from './microservices/booking/booking.module';
import { HealthModule } from './health/health.module';
import { CacheConfigService } from './cache/cache-config.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRootAsync({ useClass: GqlConfigService }),
    CacheModule.registerAsync({ useClass: CacheConfigService }),
    ScheduleModule.forRoot(),
    AuthModule,
    CustomerModule,
    MailModule,
    BookingModule,
    HealthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
