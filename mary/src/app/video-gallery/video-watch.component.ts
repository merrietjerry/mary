import { Component, OnInit } from '@angular/core';
import { DrupalService } from '../drupal.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-video-watch',
  templateUrl: './video-watch.component.html',
  styleUrls: ['./video-watch.component.css'],
  providers: [DrupalService],
})
export class VideoWatchComponent implements OnInit {
   videoDetail : any = '';

  constructor(private _drupalService: DrupalService, private _sanitizer: DomSanitizer, private route: ActivatedRoute, private router: Router, ) {
   }

  ngOnInit() {
    let vid = this.route.snapshot.paramMap.get('vid');
    this._drupalService.getDetailPage(vid).subscribe(resNode=> {this.videoDetail = resNode[0];});
  }

  readYouTube(vid){
    let url = '//www.youtube.com/embed/'+vid+'?rel=0&autoplay=1';
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
