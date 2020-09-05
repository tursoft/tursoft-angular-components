import { Component } from '@angular/core';
import { PhotoInfo } from 'projects/ngx-photo-card/src/lib/models/photoinfo';
import { PhotoCardOptions } from 'projects/ngx-photo-card/src/lib/models/options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mycomponents2';

  photos: PhotoInfo[] = [
    { title: '.NET', imgSrc: 'http://www.tursoft.net/_files/technologies/original/netcore.png', imgWidth: '200px' },
    { title: 'HTML5', imgSrc: 'http://www.tursoft.net/_files/technologies/original/html5.png', imgWidth: '200px' },
    { title: 'Javascript', imgSrc: 'http://www.tursoft.net/_files/technologies/original/js.png', imgWidth: '200px' },
    { title: 'Angular', imgSrc: 'http://www.tursoft.net/_files/technologies/original/angular.png', imgWidth: '200px' }
  ];

  options2: PhotoCardOptions =  {
    borderColor: 'black',
    borderRadius: '25px',
    showNumber: false
  };

  options3: PhotoCardOptions =  {
    borderColor: 'blue',
    borderRadius: '0px',
    showNumber: false
  };

  selectedPhotoIndex1 = 0;
  selectedPhotoIndex2 = 1;
  selectedPhotoIndex3 = 2;

  selectedPhoto1: PhotoInfo = null;
  selectedPhoto2: PhotoInfo = null;
  selectedPhoto3: PhotoInfo = null;
}
