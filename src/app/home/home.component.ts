import { Component, OnInit } from '@angular/core';
import { DrupalService } from '../drupal.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DrupalService],
})
export class HomeComponent implements OnInit {
  slideshow = [];

  constructor(private _drupalService: DrupalService, private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this._drupalService.getSlideShow().subscribe(resSlideshow => this.slideshow = resSlideshow);
  }

  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`url('${image}')`);
  }

}
