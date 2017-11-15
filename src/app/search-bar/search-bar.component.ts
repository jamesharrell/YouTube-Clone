import {Component, OnInit} from '@angular/core';
import {YouTubeSearchService} from '../list-videos/list-videos.service';
import {SearchResult} from '../search-result/search-result.model';
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
  prevTrig: boolean;
  constructor(private searchService: YouTubeSearchService, public router: Router) {
  }

  ngOnInit() {

    this.prevTrig = false;
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

  onSelection() {
    if (this.prevTrig) {
      this.videoSelection = $('.ui.search').search('get result');
      // console.log('Selected: ' + this.videoSelection.title);
      this.router.navigate(['/video/', this.videoSelection.id]);
    }
    this.prevTrig = true;
  }
}
