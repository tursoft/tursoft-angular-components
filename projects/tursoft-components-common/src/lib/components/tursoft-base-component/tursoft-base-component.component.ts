import { EventEmitter } from '@angular/core';

export abstract class TursoftBaseComponentComponent {

  private propertyValues: { [propertyName: string]: any } = { };
  constructor() {

  }

  getPropertyValue<T>(propertyName: string, defaultValue?: T): T {
    let result: T = defaultValue;
    if (this.propertyValues.hasOwnProperty(propertyName)) {
      result = this.propertyValues[propertyName];
    }
    return result;
  }

  setPropertyValue<T>(propertyName: string, newValue: T, changeEvent?: EventEmitter<T>): void {
    const hasProperty = this.propertyValues.hasOwnProperty(propertyName);
    let isValueChanged = false;

    if (changeEvent != null) {
      if (hasProperty) {
          const oldValue = this.propertyValues[propertyName];
          if (oldValue != newValue) {
            isValueChanged = this.propertyValues[propertyName];
          }
      } else {
        isValueChanged = true;
      }
    }

    this.propertyValues[propertyName] =  newValue;
    if (changeEvent != null && isValueChanged) {
      changeEvent.emit(newValue);
    }
  }

}
