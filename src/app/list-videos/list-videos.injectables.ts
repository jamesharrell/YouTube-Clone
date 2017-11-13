import {
  YouTubeSearchService,
  YOUTUBE_API_URL
} from './list-videos.service';

export const youTubeSearchInjectables: Array<any> = [
  {provide: YouTubeSearchService, useClass: YouTubeSearchService},
  {provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL}
];
