import { Component, OnInit } from '@angular/core';
import { DrupalService } from '../drupal.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl , Title} from '@angular/platform-browser';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
import { loaderStart, loaderStop} from '../../assets/js/custom';

@Component({
  selector: 'app-get-involved',
  templateUrl: './get-involved.component.html',
  styleUrls: ['./get-involved.component.css'],
  providers: [DrupalService],
})
export class GetInvolvedComponent implements OnInit {
  ministies: any = '';
  public baseURL :string;

  constructor(private _drupalService: DrupalService, private _sanitizer: DomSanitizer, route: Router, private titleService:Title) {
    this.baseURL = this._drupalService.baseURL;
    this.titleService.setTitle("Get Involved | "+_drupalService.siteName);
   }

  ngOnInit() {
    loaderStart();
    this._drupalService.getMinistry().subscribe(res => { this.ministies = res;  loaderStop()});
  }

}
