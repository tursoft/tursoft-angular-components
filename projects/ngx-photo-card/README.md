# NgxPhotoCard

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.

## Aim

This is a simple component to play with angular component packaging functionality.

## How To Use

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
<NgxPc-NgxPhotoCard [photos]="photos"></NgxPc-NgxPhotoCard>
```


*mycomponent.ts*
```typescript
  import { PhotoInfo } from 'ngx-photo-card/lib/models/photoinfo';

  photos: PhotoInfo[] = [
    { title: '.NET', imgSrc: 'http://www.tursoft.net/_files/technologies/original/netcore.png', imgWidth: '200px' },
    { title: 'HTML5', imgSrc: 'http://www.tursoft.net/_files/technologies/original/html5.png', imgWidth: '200px' },
    { title: 'Javascript', imgSrc: 'http://www.tursoft.net/_files/technologies/original/js.png', imgWidth: '200px' },
    { title: 'Angular', imgSrc: 'http://www.tursoft.net/_files/technologies/original/angular.png', imgWidth: '200px' }
  ];
```

