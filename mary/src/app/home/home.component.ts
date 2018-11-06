import { Component, OnInit } from '@angular/core';
import { DrupalService } from '../drupal.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl, Title } from '@angular/platform-browser';

import { loaderStart, loaderStop } from '../../assets/js/custom';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DrupalService],
})
export class HomeComponent implements OnInit {
  slideshow = [];
  public baseURL :string; 
  public loading = false;
  public priestHome: any = '';
  public bishop: any = '';

  constructor(private _drupalService: DrupalService, private _sanitizer: DomSanitizer, private titleService:Title) { 
    this.baseURL = this._drupalService.baseURL;
    this.titleService.setTitle(_drupalService.siteName);
  }

  ngOnInit() {
    loaderStart();
    this._drupalService.getSlideShow().subscribe(resSlideshow => {this.slideshow = resSlideshow; loaderStop(); window.scrollTo(0, 0);});
    this._drupalService.getBishop().subscribe(resBishop => {this.bishop = resBishop[0];});
    this._drupalService.getPriestHome().subscribe(res => {this.priestHome = res[0];});
  }

  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`url('${image}')`);
  }

}
