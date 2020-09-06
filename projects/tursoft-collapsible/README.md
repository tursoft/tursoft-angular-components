# tursoft-collapsible

Simple collapsible component for Angular

![npm](https://img.shields.io/npm/v/tursoft-collapsible)
![npm](https://img.shields.io/npm/dt/tursoft-collapsible)
![NPM](https://img.shields.io/npm/l/tursoft-collapsible)

## Demo Page
* https://stackblitz.com/edit/tursoft-collapsible
* https://tursoft.github.io/tursoft-angular-components/#/tursoft-collapsible

## Usage

```
npm i tursoft-collapsible --save
```

*module.ts*
```typescript
import { TursoftCollapsibleModule } from 'tursoft-collapsible';

@NgModule({
  imports: [    
    TursoftCollapsibleModule
  ]
})
```

*mycomponent.html*
```html
  <tursoft-collapsible>
    <div collapsible-header>
        <span style="color: blue;">.NET</span>
    </div>
    <div collapsible-body>
        <strong style="color: blue;">.NET Framework</strong> (pronounced as "dot net") is a software framework developed by Microsoft that runs primarily on Microsoft Windows. It includes a large class library called Framework Class Library (FCL) and provides language interoperability (each language can use code written in other languages) across several programming languages. Programs written for .NET Framework execute in a software environment (in contrast to a hardware environment) named the Common Language Runtime (CLR). The CLR is an application virtual machine that provides services such as security, memory management, and exception handling. As such, computer code written using .NET Framework is called "managed code". FCL and CLR together constitute the .NET Framework.
        <br/>
        FCL provides the user interface, data access, database connectivity, cryptography, web application development, numeric algorithms, and network communications. Programmers produce software by combining their source code with .NET Framework and other libraries. The framework is intended to be used by most new applications created for the Windows platform. Microsoft also produces an integrated development environment for .NET software called Visual Studio.    
    </div>
  </tursoft-collapsible>
```
