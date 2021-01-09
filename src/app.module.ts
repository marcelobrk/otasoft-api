import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';

import { GraphqlWrapperModule } from './graphql/graphql-wrapper.module';
import { RedisCacheModule } from './cache/redis-cache.module';
import { HealthModule } from './health/health.module';
import { MicroservicesModules } from './microservices';
import { BullQueueModule } from './queues/bull-queue.module';
import { UtilsModule } from './utils/utils.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule.forRoot(),
    GraphqlWrapperModule,
    RedisCacheModule,
    BullQueueModule,
    HealthModule,
    UtilsModule,
    ...MicroservicesModules,
  ],
})
export class AppModule {}
