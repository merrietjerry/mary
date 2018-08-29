import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()

export class DrupalService {

    private drupalBasePath: string = 'http://localhost';

    private apiBasePath : string = 'http://localhost/drupal8/api/';

    constructor(private _http: Http) { }

    getSlideShow() {
        return this._http.get(this.apiBasePath+'carousel').map((response: Response) => response.json());
    }

    getAboutPage() {
        return this._http.get(this.apiBasePath+'about').map((response: Response) => response.json());
    }

    getPriestPage() {
        return this._http.get(this.apiBasePath+'priest').map((response: Response) => response.json());
    }

    getBullets() {
        return this._http.get(this.apiBasePath+'home-bullets').map((response: Response) => response.json());
    }

    getDetailPage(path){
        return this._http.get(this.apiBasePath+'detail/?path='+path).map((response: Response) => response.json());
    }

    getTopMenu(){
        return this._http.get(this.apiBasePath+'top-menu').map((response: Response) => response.json());
    }

    getImageGallery(){
        return this._http.get(this.apiBasePath+'image-gallery').map((response: Response) => response.json());
    }

    getGalleryImages(path){
        return this._http.get(this.apiBasePath+'image-gallery-items/?path='+path).map((response: Response) => response.json());
    }

    getGalleryVideos(path){
        //return this._http.get(this.apiBasePath+'video-gallery/?category='+path).map((response: Response) => response.json());
        return this._http.get(this.apiBasePath+'video-gallery').map((response: Response) => response.json());
    }

    getPostList(){
        return this._http.get(this.apiBasePath+'news').map((response: Response) => response.json());
    }


    getImagePath(path){
        return this.drupalBasePath+path;
    }

    getGalleryPath(path){
        return path.replace('/drupal8', '');
    }
}