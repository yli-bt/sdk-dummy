import { Injectable } from '@nestjs/common';
import { Journey } from '@goboomtown/sdk/lib/api/controllers';
import { JourneyListOptions } from '@goboomtown/sdk/lib/core/dtos';
import { AxiosHandler } from '@goboomtown/sdk/lib/gateway/request-handler';
import { BoomtownClient } from '@goboomtown/sdk/lib/gateway/client/boomtown-client';
import { JourneyRepository } from '@goboomtown/sdk/lib/gateway/repositories';
import { JourneyService as SDKJourneyService } from '@goboomtown/sdk/lib/core/services';

@Injectable()
export class JourneyService {

  async getJourneys(param: JourneyListOptions): Promise<string> {
    const journey = new Journey(new SDKJourneyService(new JourneyRepository(new BoomtownClient(new AxiosHandler()))));
    if (param.limit == undefined || param.limit <= 0) {
      param.limit = 10;
    }
    if (param.skip == undefined || param.skip < 0) {
      param.skip = 0;
    }
    if (param.idOrg == undefined ) {
      param.idOrg = '';
    }

    const result = await journey.get(param);

    return '<h1>Get Journeys</h1>' +
      '<form>' +
      '<label for="limit">Limit:</label><br>' +
      '<input type="text" id="limit" name="limit" value=' + param.limit + '><br>' +
      '<label for="skip">Skip:</label><br>' +
      '<input type="text" id="skip" name="skip" value=' + param.skip + '><br>' +
      '<label for="idOrg">Org ID:</label><br>' +
      '<input type="text" id="idOrg" name="idOrg" value=' + param.idOrg + '><br>' +
      '<label for="isPublished">Is Published:</label><br>' +
      '<select id="isPublished" name="isPublished">' + 
      '<option value="">-- Choose an option --</option>' +
      '<option value="true">True</option>' +
      '<option value="false">False</option>' +
      '</select><br>' +
      '<input type="submit" value="Submit">' +
      '</form>' +
      '<p><pre>' + JSON.stringify(result.data, undefined, 2) + '</pre></p><br>' +
      '<p><a href="/">Go back home</a></p>';
  }
}
