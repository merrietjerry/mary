import { Component, OnInit } from '@angular/core';
import { DrupalService } from '../drupal.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl , Title} from '@angular/platform-browser';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
import { loaderStart, loaderStop} from '../../assets/js/custom';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css'],
  providers: [DrupalService],
})
export class ImageGalleryComponent implements OnInit {

  images: any = '';
  private imageList: any[] = [];
  public baseURL :string;

  constructor(private _drupalService: DrupalService, private _sanitizer: DomSanitizer, route: Router, private titleService:Title) {
    this.baseURL = this._drupalService.baseURL;
    this.titleService.setTitle("Image Gallery | "+_drupalService.siteName);
   }

  ngOnInit() {
    loaderStart();
    this._drupalService.getImageGallery().subscribe(res => { this.images = res;  loaderStop()});
  }

  processData() {
    if (this.images) {
      this.images.forEach(function (value) {
        this.imageList.push({
          'image': this._drupalService.getImagePath(value.field_cover_image),
          'title': value.title,
          'path': this._drupalService.getGalleryPath(value.path)
        });
      });
    }
  }

}
