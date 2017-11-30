import {
  Injectable,
  Inject
} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {SearchResult} from '../search-result/search-result.model';
import 'rxjs/add/operator/map';

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
           console.log('raw item', item);
          return new SearchResult({
            id: item.id,
            title: item.title,
            description: item.description,
            playCount: item.playCount,
            username: item.username,
            thumbnailUrl: 'null'
          });

        });
      });
  }
}
