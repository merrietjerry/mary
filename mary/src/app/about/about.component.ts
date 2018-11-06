import { Component, OnInit } from '@angular/core';
import { DrupalService } from '../drupal.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl, Title} from '@angular/platform-browser';
import { loaderStart, loaderStop} from '../../assets/js/custom';

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

  constructor(private _drupalService: DrupalService, private _sanitizer: DomSanitizer, private titleService:Title) { 
    this.baseURL = this._drupalService.baseURL;
    this.titleService.setTitle('About Us' + ' | '+ this._drupalService.siteName);
  }

  ngOnInit() {
    loaderStart();
    this._drupalService.getAboutPage().subscribe(res => {this.about = res[0]; this.processData(); loaderStop()});
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
