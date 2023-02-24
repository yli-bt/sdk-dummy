import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private idJourney = '63ef17418240657a26772e4b';
  getHome(): string {
    return '<h1>SDK-TS Dummy Project</h1>' +
      '<ul>'+
      '<li><a href="/activities">Get Activities</a></li>' +
      '<li><a href="/journeys">Get Journeys</a></li>' +
      '<li><a href="/flows/' + this.idJourney + '">Get Flows</a></li>' +
      '<li><a href="/workflows/' + this.idJourney + '">Get Workflows</a></li></ul>';
  }
}
