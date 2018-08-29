import { Component, OnInit } from '@angular/core';
import { DrupalService } from '../drupal.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [DrupalService],
})
export class PostComponent implements OnInit {
  nodeList: any = '';

  constructor(private _drupalService: DrupalService, private _sanitizer: DomSanitizer, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this._drupalService.getPostList().subscribe(resNode => { this.nodeList = resNode; this.processData(); });
  }

  processData() {
  }
}
