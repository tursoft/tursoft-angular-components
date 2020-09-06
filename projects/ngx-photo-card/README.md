# ngx-photo-card

Simple photo card component for Angular

## The Aim

This is a simple component to play with angular component packaging functionality.

## Usage

```
npm i ngx-photo-card --save
```

*module.ts*
```typescript
import { NgxPhotoCardModule } from 'ngx-photo-card';

@NgModule({
  imports: [    
    NgxPhotoCardModule
  ]
})
```

*mycomponent.html*
```html
<ngx-photo-card [photos]="photos" [options]="options"></ngx-photo-card>
```


*mycomponent.ts*
```typescript
  import { PhotoInfo } from 'ngx-photo-card/lib/models/photoinfo';
  import { PhotoCardOptions } from 'ngx-photo-card/lib/models/options';

  photos: PhotoInfo[] = [
    { title: '.NET', imgSrc: 'http://www.tursoft.net/_files/technologies/original/netcore.png', imgWidth: '200px' },
    { title: 'HTML5', imgSrc: 'http://www.tursoft.net/_files/technologies/original/html5.png', imgWidth: '200px' },
    { title: 'Javascript', imgSrc: 'http://www.tursoft.net/_files/technologies/original/js.png', imgWidth: '200px' },
    { title: 'Angular', imgSrc: 'http://www.tursoft.net/_files/technologies/original/angular.png', imgWidth: '200px' }
  ];

  options: PhotoCardOptions =  {
    borderColor: 'black',
    borderRadius: '25px',
    showNumber: false
  };
```

