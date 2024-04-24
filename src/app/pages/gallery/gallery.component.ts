import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  gallery: any;
  constructor(private _api: ApiService) {
    this.getGallery();
  }

  private getGallery() {
    this._api.getGallery().subscribe({
      next: data => {
        this.gallery = data;
        console.log("gallery");
        console.log(this.gallery);
      },
      error: () => {
        console.error();
      }
    });
  }
  goToGalleryDetails(url:string){
  console.log("url "+url);
    window.open(url,'_blank');
  }
}
