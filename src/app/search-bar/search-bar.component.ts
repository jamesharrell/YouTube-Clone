import { Component, OnInit } from '@angular/core';
import { YouTubeSearchService } from '../list-videos/list-videos.service';
import { SearchResult } from '../search-result/search-result.model';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  results: SearchResult[];
  videoSelection;
  shouldSearch: boolean;
  constructor(private searchService: YouTubeSearchService, public router: Router) {
  }

  ngOnInit() {

    this.shouldSearch = false;
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
  onTyping() {
    this.shouldSearch = true;
  }
  onSelection() {
    console.log('in onSelection');
    if (this.shouldSearch) {
      console.log('passed the IF');
      this.videoSelection = $('.ui.search').search('get result');
      console.log(this.videoSelection);
      this.router.navigate(['/video/', this.videoSelection.id]);
      this.shouldSearch = false;
    }
    $('.ui.search').search('set value', '');
  }
}
