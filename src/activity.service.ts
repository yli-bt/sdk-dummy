import { Injectable } from '@nestjs/common';
import { JourneyActivity } from '@goboomtown/sdk/lib/api/controllers';
import { JourneyActivityListOptions } from '@goboomtown/sdk/lib/core/dtos';
import { AxiosHandler } from '@goboomtown/sdk/lib/gateway/request-handler';
import { BoomtownClient } from '@goboomtown/sdk/lib/gateway/client/boomtown-client';
import { JourneyActivityRepository } from '@goboomtown/sdk/lib/gateway/repositories';
import { JourneyActivityService as SDKJourneyActivityService} from '@goboomtown/sdk/lib/core/services';

@Injectable()
export class ActivityService {

  async getActivities(param: JourneyActivityListOptions): Promise<string> {
    const activity = new JourneyActivity(new SDKJourneyActivityService(new JourneyActivityRepository(new BoomtownClient(new AxiosHandler()))));
    if (param.limit == undefined || param.limit <= 0) {
      param.limit = 10;
    }
    if (param.skip == undefined || param.skip < 0) {
      param.skip = 0;
    }

    const result = await activity.get(param);

    return '<h1>Get Activities</h1>' +
      '<form>' +
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
