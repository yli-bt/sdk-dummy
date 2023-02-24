import { Injectable } from '@nestjs/common';
import { JourneyWorkflow } from '@goboomtown/sdk/lib/api/controllers';
import { JourneyWorkflowListOptions } from '@goboomtown/sdk/lib/core/dtos';
import { AxiosHandler } from '@goboomtown/sdk/lib/gateway/request-handler';
import { BoomtownClient } from '@goboomtown/sdk/lib/gateway/client/boomtown-client';
import { JourneyWorkflowRepository } from '@goboomtown/sdk/lib/gateway/repositories';
import { JourneyWorkflowService as SDKJourneyWorkflowService } from '@goboomtown/sdk/lib/core/services';

@Injectable()
export class WorkflowService {

  async getWorkflows(idJourney: string, param: JourneyWorkflowListOptions): Promise<string> {
    const workflow = new JourneyWorkflow(new SDKJourneyWorkflowService(new JourneyWorkflowRepository(new BoomtownClient(new AxiosHandler()))));
    if (param.limit == undefined || param.limit <= 0) {
      param.limit = 10;
    }
    if (param.skip == undefined || param.skip < 0) {
      param.skip = 0;
    }
    const result = await workflow.get(idJourney, param);

    return '<h1>Get Workflows</h1>' +
      '<form>' +
      '<label for="idJourney">Journey ID:</label><br>' +
      '<input type="text" id="idJourney" name="idJourney" value=' + idJourney + '><br>' +
      '<label for="limit">Limit:</label><br>' +
      '<input type="text" id="limit" name="limit" value=' + param.limit + '><br>' +
      '<label for="skip">Skip:</label><br>' +
      '<input type="text" id="skip" name="skip" value=' + param.skip + '><br>' +
      '<input type="submit" value="Submit">' +
      '</form>' +
      '<p><pre>' + JSON.stringify(result.data, undefined, 2) + '</pre></p><br>' +
      '<p><a href="/">Go back home</a></p>';
  }



}
