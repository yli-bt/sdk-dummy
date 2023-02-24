import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActivityService } from './activity.service';
import { FlowService } from './flow.service';
import { JourneyService } from './journey.service';
import { WorkflowService } from './workflow.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService, 
    ActivityService,
    FlowService,
    JourneyService,
    WorkflowService
  ],
})
export class AppModule {}
