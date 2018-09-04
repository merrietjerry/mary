import { Component, OnInit } from '@angular/core';
import { DrupalService } from '../drupal.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [DrupalService],
})
export class AboutComponent implements OnInit {

  about : any = '';
  path : string;
  isSlideshow : boolean = false;
  coverImage : string = '';
  slideShow : any = '' ;
  public baseURL: string;

  constructor(private _drupalService: DrupalService, private _sanitizer: DomSanitizer) { 
    this.baseURL = this._drupalService.baseURL;
  }

  ngOnInit() {
    this._drupalService.getAboutPage().subscribe(res => {this.about = res[0]; this.processData(); });
  }

  processData(){
    if(this.about.field_about_gallery){
      let field_about_gallery = this.about.field_about_gallery.split('##');
      if(field_about_gallery.length == 1){
        this.coverImage = field_about_gallery[0];
      }else if(field_about_gallery.length > 1){
        this.slideShow = field_about_gallery;
        this.isSlideshow = true;
      }
    }
  }
}
