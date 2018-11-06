import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DrupalService } from '../drupal.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [DrupalService]
})
export class ContactComponent implements OnInit {

  constructor(private _drupalService: DrupalService, private titleService:Title) {
    this.titleService.setTitle('Contact Us' + ' | '+ this._drupalService.siteName);
   }

  ngOnInit() {
  }

}
