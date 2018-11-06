import { Component, OnInit } from '@angular/core';
import { DrupalService } from '../drupal.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [DrupalService],
})
export class HeaderComponent implements OnInit {

  topMenu : any = '';

  constructor(private _drupalService: DrupalService, private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this._drupalService.getTopMenu().subscribe(res => this.topMenu = res);
  }
}
