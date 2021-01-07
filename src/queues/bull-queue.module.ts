import { BullModule } from '@nestjs/bull';
import { Global, Module } from '@nestjs/common';

import { BullQueueService } from './bull-queue.service';
import { bullAsyncConfig, queueAsyncConfig } from './configs';

@Global()
@Module({
  imports: [
    BullModule.forRootAsync(bullAsyncConfig),
    BullModule.registerQueueAsync(queueAsyncConfig),
  ],
  providers: [BullQueueService],
})
export class BullQueueModule {}
