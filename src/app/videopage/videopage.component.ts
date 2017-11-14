import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { SearchResult } from '../search-result/search-result.model';
import { YouTubeSearchService } from '../list-videos/list-videos.service';
@Component({
  selector: 'app-videopage',
  templateUrl: './videopage.component.html',
  styleUrls: ['./videopage.component.css']
})
export class VideopageComponent implements OnInit {
  videoID: string;
  results: SearchResult[];
  constructor(private route: ActivatedRoute, private searchService: YouTubeSearchService) {
    route.params.subscribe(params => { this.videoID = params['id']; });
  }

  ngOnInit() {
    this.searchService.search().subscribe(
      responseCol => {
        this.updateResults(responseCol);
      });
  }
  updateResults(results: SearchResult[]): void {
    this.results = results;
  }

}
