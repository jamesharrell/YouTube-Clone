import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { VideopageComponent } from './videopage/videopage.component';
import { ListVideosComponent } from './list-videos/list-videos.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import {Routes, RouterModule} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ListVideosComponent,
    data: { title: 'Home Page' }
  },
  {
    path: 'videos',
    component: VideopageComponent,
    data: { title: 'Video Player' }
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    VideopageComponent,
    ListVideosComponent,
    VideoPlayerComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
