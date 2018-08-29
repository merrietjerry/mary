import { Component, OnInit } from '@angular/core';
import { DrupalService } from '../drupal.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [DrupalService],
})
export class ContentComponent implements OnInit {

  node : any = '';
  path : string;
  isSlideshow : boolean = false;
  coverImage : string = '';
  slideShow : any = '' ;

  constructor(private _drupalService: DrupalService, private _sanitizer: DomSanitizer, route: Router) {
    route.events.subscribe((url:any) => url);
    this.path = route.url.substring(1);
   }

  ngOnInit() {
    this._drupalService.getDetailPage(this.path).subscribe(resNode=> {this.node = resNode[0]; this.processData();});
  }
  
  processData(){
    if(this.node.field_cover_image){
      let field_cover_image = this.node.field_cover_image.split('##');
      if(field_cover_image.length == 1){
        this.coverImage = field_cover_image[0];
      }else if(field_cover_image.length > 1){
        this.slideShow = field_cover_image;
        this.isSlideshow = true;
      }
    }
  }
  
  
}
