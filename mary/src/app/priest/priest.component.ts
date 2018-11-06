import { Component, OnInit } from '@angular/core';
import { DrupalService } from '../drupal.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl, Title } from '@angular/platform-browser';

import { loaderStart, loaderStop} from '../../assets/js/custom';

@Component({
  selector: 'app-priest',
  templateUrl: './priest.component.html',
  styleUrls: ['./priest.component.css'],
  providers: [DrupalService]
})
export class PriestComponent implements OnInit {

  priests = [];
  public baseURL: string;

  constructor(private _drupalService: DrupalService, private _sanitizer: DomSanitizer, private titleService:Title) {
    this.baseURL = this._drupalService.baseURL;
    this.titleService.setTitle('Priest' + ' | '+ this._drupalService.siteName);
   }

  ngOnInit() {
    loaderStart();
    this._drupalService.getPriestPage().subscribe(resPriestList => {this.priests = resPriestList; loaderStop()});
  }

}
