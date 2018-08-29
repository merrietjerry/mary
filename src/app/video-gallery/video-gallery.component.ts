import { Component, OnInit, DoCheck } from '@angular/core';
import { DrupalService } from '../drupal.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';

import { TriggerLight, addGalleryClass } from '../../assets/js/custom';

@Component({
  selector: 'video-gallery',
  templateUrl: './video-gallery.component.html',
  styleUrls: ['./video-gallery.component.css'],
  providers: [DrupalService],
})
export class VideoGalleryComponent implements OnInit, DoCheck {

  private Videos: any[] = [];
  private videosAll: Array<any> = [];
  private videoCategory: Array<any> = [];
  //private firstLoad: string = 'firstLoad';
  activeFilter: string = 'all';

  category: string;

  constructor(private _drupalService: DrupalService, private _sanitizer: DomSanitizer, private route: ActivatedRoute) { }
  
  ngDoCheck(){
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => { this.category = params['category']; this.getVideoList() });
  }

  getVideoList() {
    if (this.category == '' || this.category == 'undefined') {
      this.category = 'all';
    }
    this._drupalService.getGalleryVideos('all').subscribe(res => { this.videosAll = res; this.processData() })
    //this._drupalService.getGalleryVideos(this.category).subscribe(res => { this.Videos = res })
    
  }

  processData() {
    //addGalleryClass();
    this.Videos = this.videosAll;
    if (this.videosAll) {
      this.videosAll.forEach((val, index) => {
        if (!this.videoCategory.some((item) => item.id == val.field_category_1)) {
          this.videoCategory.push({ ['id']: val.field_category_1, ['value']: val.field_category });
        }
      });
    }
  }

  triggerVideoLightGallery(first, last) {
    if (last) {
      TriggerLight();
    }

  }

  // setClassInFirst(first){
  //   addGalleryClass();
  // }

  changeVideofilter(val){
    this.activeFilter = val;
  }
}
