import { Component, OnInit, Input } from '@angular/core';
import { VgPlayer } from 'videogular2/core';
declare var $: any;
@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  @Input() videoID: String;
  playerRefresh: boolean;
  sources = [];
  constructor() { }

  ngOnChanges() {
    this.sources[0] = this.videoID;
  }
  ngOnInit() {
    this.sources[0] = this.videoID;
  }
}
