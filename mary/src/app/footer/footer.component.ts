import { Component, OnInit } from '@angular/core';
import { DrupalService } from '../drupal.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [DrupalService]
})
export class FooterComponent implements OnInit {

  footerMenu : any = '';

  constructor(private _drupalService: DrupalService, private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this._drupalService.getFooterMenu().subscribe(res => this.footerMenu = res);
  }

}
