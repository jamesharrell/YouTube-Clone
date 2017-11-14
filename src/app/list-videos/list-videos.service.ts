import {
  Injectable,
  Inject
} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {SearchResult} from '../search-result/search-result.model';
import 'rxjs/add/operator/map';

/*
  This API key may or may not work for you. Your best bet is to issue your own
  API key by following these instructions:
  https://developers.google.com/youtube/registering_an_application#Create_API_Keys

  Here I've used a **server key** and make sure you enable YouTube.

  Note that if you do use this API key, it will only work if the URL in
  your browser is "localhost"
*/
export const YOUTUBE_API_URL = 'http://ytclone.jamesharrell.me:3000/videos';

@Injectable()
export class YouTubeSearchService {
  constructor(private http: Http,
              @Inject(YOUTUBE_API_URL) private apiUrl: string) {
  }

  search(): Observable<SearchResult[]> {

    const queryUrl = `${this.apiUrl}`;
    return this.http.get(queryUrl)
      .map((response: Response) => {
        return (<any>response.json()).map(item => {
           console.log('raw item', item); // uncomment if you want to debug
          return new SearchResult({
            id: item.id,
            title: item.title,
            description: item.description,
            playCount: item.playCount,
            thumbnailUrl: 'null'
            // thumbnailUrl: item.snippet.thumbnails.high.url
          });

        });
      });
  }
}
