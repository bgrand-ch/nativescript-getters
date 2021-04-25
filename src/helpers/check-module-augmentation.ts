import { ViewBase } from '@nativescript/core/ui'

export function checkModuleAugmentation (): void {
  console.log('check module augmentation')
}

// https://www.digitalocean.com/community/tutorials/typescript-module-augmentation
declare module "@nativescript/core/ui" {
  interface ViewBase {
    checkModuleAugmentation: () => void
  }
}

ViewBase.prototype.checkModuleAugmentation = checkModuleAugmentation
