import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../search-result/search-result.model';
import { YouTubeSearchService } from './list-videos.service';
@Component({
  selector: 'app-list-videos',
  templateUrl: './list-videos.component.html',
  styleUrls: ['./list-videos.component.css']
})
export class ListVideosComponent implements OnInit {
  results: SearchResult[];
  loading: boolean;

  constructor(private searchService: YouTubeSearchService) { }

  ngOnInit() {
    this.searchService.search().subscribe(
      responseCol => {
        this.updateResults(responseCol);
      });
  }
  updateResults(results: SearchResult[]): void {
    this.results = results;
    console.log(results)
  }

}
