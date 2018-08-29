import { Component, OnInit} from '@angular/core';
import { DrupalService } from '../drupal.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';

import { TriggerLight } from '../../assets/js/custom';

@Component({
    selector: 'app-image-list',
    templateUrl: './image-list.component.html',
    providers: [DrupalService],
})

export class ImageListComponent implements OnInit{

    galleryPath: string;
    node: any;
    thumb: string;
    private imageList: any[] = [];
    title: string;

    private last: number;

    // imageRenderedList: string;

    constructor(private _drupalService: DrupalService, private _sanitizer: DomSanitizer, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.params.subscribe(params => { this.galleryPath = params['imagelist']; this.getImageList() });
    }

    getImageList() {
        this._drupalService.getGalleryImages(this.galleryPath).subscribe(res => { this.node = res[0]; this.processData() })
    }

    processData() {
        if (this.node.field_cover_image) {
            this.title = this.node.title;
            let imageThumb = this.node.field_cover_image.split('**');
            let original = this.node.field_cover_image_1.split('**');

            for (let i = 0; i < imageThumb.length; i++) {
                let imageAndTitle = imageThumb[i].split('##');
                this.imageList.push({
                    'thumb': this._drupalService.getImagePath(imageAndTitle[0]),
                    'title': imageAndTitle[1],
                    'original': this._drupalService.getImagePath(original[i])
                });
            }
        }
    }

    triggerLightGallery(index) {
        if (index) {
            TriggerLight();
        }

    }
}