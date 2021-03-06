import { Component, OnInit } from '@angular/core';
import { DrupalService } from '../drupal.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-priest',
  templateUrl: './priest.component.html',
  styleUrls: ['./priest.component.css'],
  providers: [DrupalService]
})
export class PriestComponent implements OnInit {

  priests = [];
  public baseURL: string;

  constructor(private _drupalService: DrupalService, private _sanitizer: DomSanitizer) {
    this.baseURL = this._drupalService.baseURL;
   }

  ngOnInit() {
    this._drupalService.getPriestPage().subscribe(resPriestList => this.priests = resPriestList);
  }

}
