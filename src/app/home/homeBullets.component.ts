import { Component, OnInit } from '@angular/core';
import { DrupalService } from '../drupal.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'home-bullets',
  templateUrl: './homeBullets.component.html',
  styleUrls: ['./homeBullets.component.css'],
  providers: [DrupalService],
})
export class HomeBulletsComponent implements OnInit {
  homeBullets = [];

  constructor(private _drupalService: DrupalService, private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this._drupalService.getBullets().subscribe(resBullets => this.homeBullets = resBullets);
  }

}
