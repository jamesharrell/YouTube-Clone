import { Component, OnInit } from '@angular/core';
import { YouTubeSearchService } from '../list-videos/list-videos.service';
import { SearchResult } from '../search-result/search-result.model';
declare var $: any;
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  results: SearchResult[];
  constructor(private searchService: YouTubeSearchService) { }

  ngOnInit() {


    this.searchService.search().subscribe(
      responseCol => {
        this.updateResults(responseCol);
        $('.ui.search').search({
          source: this.results,
          searchFields: [
            'title'
          ]
        });
      });
  }
updateResults(results: SearchResult[]): void {
  this.results = results;
}

}
