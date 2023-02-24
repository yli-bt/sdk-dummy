import { Controller, Get, Query, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ActivityService } from './activity.service';
import { 
  JourneyActivityListOptions, 
  JourneyListOptions, 
  JourneyFlowListOptions, 
  JourneyWorkflowListOptions 
} from '@goboomtown/sdk/lib/core/dtos';
import { FlowService } from './flow.service';
import { JourneyService } from './journey.service';
import { WorkflowService } from './workflow.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly activityService: ActivityService,
    private readonly flowService: FlowService,
    private readonly journeyService: JourneyService,
    private readonly workflowService: WorkflowService
  ) {}

  @Get()
  getHome(): string {
    return this.appService.getHome();
  }

  @Get('/activities')
  async getActivities(@Query() options: JourneyActivityListOptions): Promise<string> {
    return await this.activityService.getActivities(options);
  }

  @Get('/journeys')
  async getJourneys(@Query() options: JourneyListOptions): Promise<string> {
    return await this.journeyService.getJourneys(options);
  }

  @Get('/flows/:idJourney')
  async getFlows(@Param() params, @Query() options: JourneyFlowListOptions): Promise<string> {
    return await this.flowService.getFlows(params.idJourney, options);
  }

  @Get('/workflows/:idJourney')
  async getWorkflows(@Param() params, @Query() options: JourneyWorkflowListOptions): Promise<string> {
    return await this.workflowService.getWorkflows(params.idJourney, options);
  }
}
