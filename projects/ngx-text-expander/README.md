# ngx-text-expander

Simple text-expander component for Angular

![npm](https://img.shields.io/npm/v/ngx-text-expander)
![npm](https://img.shields.io/npm/dt/ngx-text-expander)
![NPM](https://img.shields.io/npm/l/ngx-text-expander)

## Demo Page
* https://stackblitz.com/edit/ngx-text-expander
* https://tursoft.github.io/tursoft-angular-components/#/ngx-text-expander

## Usage

```
npm i ngx-text-expander --save
```

*module.ts*
```typescript
import { NgxTextExpanderModule } from 'ngx-text-expander';

@NgModule({
  imports: [    
    NgxTextExpanderModule
  ]
})
```

*mycomponent.html*
```html
<ngx-text-expander
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
       [max-char-count]="20"
       less-text="show less"
       more-text="show more"
       [show-ellipse]="true">
</ngx-text-expander>
```

```html
<ngx-text-expander
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        [max-char-count]="6"
        less-text="show less"
        more-text="show more"
        [show-ellipse]="true">
</ngx-text-expander>
```
