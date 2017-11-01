import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
<<<<<<< HEAD
import { VideopageComponent } from './videopage/videopage.component';
=======
import { ListVideosComponent } from './list-videos/list-videos.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
>>>>>>> 685d0c288234e8cbf6e2a8b8d5800c9c32600338

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    VideopageComponent,
=======
    ListVideosComponent,
    VideoPlayerComponent,
>>>>>>> 685d0c288234e8cbf6e2a8b8d5800c9c32600338
    
  ],
  imports: [
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
