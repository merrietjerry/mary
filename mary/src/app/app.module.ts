import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { LoadingModule } from 'ngx-loading';;

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PriestComponent } from './priest/priest.component';
import { HomeBulletsComponent } from './home/homeBullets.component';
import { ContentComponent } from './content/content.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import {ImageListComponent} from './image-gallery/image-list.component';
import { VideoGalleryComponent } from './video-gallery/video-gallery.component';
import { VideoWatchComponent } from './video-gallery/video-watch.component';
import { PostComponent } from './post/post.component';
import { ShareButtonsModule } from 'ngx-sharebuttons';
import { SocialshareComponent } from './socialshare/socialshare.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GetInvolvedComponent } from './post/get-involved.component';


const appRoutes : Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'priest', component: PriestComponent},
  {path: 'get-involved', component: GetInvolvedComponent},
  {path: 'image-gallery', component: ImageGalleryComponent},
  {path: 'image-gallery/:imagelist', component: ImageListComponent},
  {path: 'video-gallery', component: VideoGalleryComponent},
  {path: 'video-gallery/:category', component: VideoGalleryComponent},
  {path: 'video-gallery/watch/:vid', component: VideoWatchComponent},
  {path: 'parish-news', component: PostComponent},
  {path: '404', component: NotFoundComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: ContentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    PriestComponent,
    HomeBulletsComponent,
    ContentComponent,
    ImageGalleryComponent,
    ImageListComponent,
    VideoGalleryComponent,
    VideoWatchComponent,
    PostComponent,
    SocialshareComponent,
    NotFoundComponent,
    GetInvolvedComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'}),
    ShareButtonsModule.forRoot(),
    LoadingModule  
  ],
  exports: [RouterModule],
  //providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
