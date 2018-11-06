import { Component, OnInit } from '@angular/core';
import { DrupalService } from '../drupal.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl, Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';

import { loaderStart, loaderStop } from '../../assets/js/custom';



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
  public baseURL: string;

  constructor(private _drupalService: DrupalService, private _sanitizer: DomSanitizer, private route: Router, private titleService:Title) {
    route.events.subscribe((url:any) => url);
    this.path = route.url.substring(1);
    this.baseURL = this._drupalService.baseURL;
    
   }

  ngOnInit() {
    loaderStart();
    this._drupalService.getDetailPage(this.path).subscribe(resNode=> {this.node = resNode[0]; this.processData(); loaderStop()}, (err) => {this.route.navigate(['404']);});
  }
  
  processData(){
    this.titleService.setTitle(this.node.title + ' | '+ this._drupalService.siteName);
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
