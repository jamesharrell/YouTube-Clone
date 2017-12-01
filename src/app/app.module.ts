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
import { SearchResultComponent } from './search-result/search-result.component';

import { youTubeSearchInjectables } from './list-videos/list-videos.injectables';
import { HttpModule} from '@angular/http';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LoginComponent } from './login/login.component';

import { LoggedInGuard } from './logged-in.guard';
import { AUTH_PROVIDERS } from './auth.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'home',
    component: ListVideosComponent,
    data: { title: 'Home Page' },
    canActivate: [ LoggedInGuard ]
  },
  {
    path: 'video/:id',
    component: VideopageComponent,
    data: { title: 'Video Player' },
    canActivate: [ LoggedInGuard ]
  },
  { 
    path: 'login', 
    component: LoginComponent
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
    SearchResultComponent,
    SearchBarComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [
    youTubeSearchInjectables,
    AUTH_PROVIDERS,
    LoggedInGuard
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
