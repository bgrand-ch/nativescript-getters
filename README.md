# NativeScript Getters Plugin

![NPM version](https://img.shields.io/npm/v/nativescript-getters)
![GitHub last commit](https://img.shields.io/github/last-commit/bgrand-ch/nativescript-getters)
![NPM downloads](https://img.shields.io/npm/dw/nativescript-getters)
![NPM bundle size](https://img.shields.io/bundlephobia/min/nativescript-getters)

A NativeScript plugin that adds five new getters – in addition to the native `getViewById` method – to retrieve one or more views by tag, type, class, style or property.

## Getting Started

### Prerequisites

#### Basics

- NativeScript installed and configured. (see [CLI setup](https://docs.nativescript.org/environment-setup.html))
- An IDE with intelligent code completion. (see [VS Code](https://docs.nativescript.org/development-workflow.html#visual-studio-code))
- A functional project to use the plugin. (see [app templates](https://docs.nativescript.org/development-workflow.html#create))

#### Minimum versions

- [@nativescript/core](https://docs.nativescript.org/development-workflow.html#updating), 8.0.0 or higher
- [@nativescript/android](https://docs.nativescript.org/development-workflow.html#upgrading-platforms), 8.0.0 or higher
- [@nativescript/ios](https://docs.nativescript.org/development-workflow.html#upgrading-platforms), 8.0.0 or higher
- ECMAScript, 2015 (ES6) or higher

### Installation

In Command prompt or Terminal navigate to your application root folder and run one of the following commands to install the plugin. (see [docs](https://docs.nativescript.org/development-workflow.html#plugins))

```shell
ns plugin add nativescript-getters
```

or

```shell
npm install --save nativescript-getters
```

> The `--save` flag will add the plugin as dependency in your `package.json` file.

## Usage

Import the plugin at the top of your JavaScript or TypeScript file. It can be imported only once into the application entry point file. (see [docs](https://v7.docs.nativescript.org/core-concepts/application-architecture#entry-point))

```javascript
import "nativescript-getters";
```

> New methods have been added in the Frame, Page, tabs, layouts and texts classes. (see [methods](#methods))

### Examples

#### Get views by tags

_JavaScript_

```javascript
const topmost = require("tns-core-modules/ui/frame").topmost;

const pageLayout = topmost().currentPage.content;
const fields = pageLayout.getViewsByTags("TextField", "TextView");

console.log("Fields found:", fields);
```

_TypeScript_

```typescript
import { topmost } from "tns-core-modules/ui/frame";

const pageLayout: View = topmost().currentPage.content;
const layouts: Array<View> = pageLayout.getViewsByTags("TextField", "TextView");

console.log("Fields found:", fields);
```

#### Get views by type

_JavaScript_

```javascript
const topmost = require("tns-core-modules/ui/frame").topmost;

const pageLayout = topmost().currentPage.content;
const layouts = pageLayout.getViewsByType("layout");

console.log("Layouts found:", layouts);
```

_TypeScript_

```typescript
import { topmost } from "tns-core-modules/ui/frame";

const pageLayout: View = topmost().currentPage.content;
const layouts: Array<View> = pageLayout.getViewsByType("layout");

console.log("Layouts found:", layouts);
```

#### Get views by value pair

_JavaScript_

```javascript
const topmost = require("tns-core-modules/ui/frame").topmost;

const pageLayout = topmost().currentPage.content;
const checkedBoxes = pageLayout.getViewsByValuePair("checked", true); // or "true"

console.log("Checked boxes found:", checkedBoxes);
```

_TypeScript_

```typescript
import { topmost } from "tns-core-modules/ui/frame";

const pageLayout: View = topmost().currentPage.content;
const checkedBoxes: Array<View> = pageLayout.getViewsByValuePair("checked", true); // or "true"

console.log("Checked boxes found:", checkedBoxes);
```

## API

### Methods

All methods **return an array of [views](https://v7.docs.nativescript.org/api-reference/classes/view.html)**, except for the native method [`getViewById`](https://v7.docs.nativescript.org/api-reference/classes/view.html#getviewbyid).

Name | Parameter(s) | Returns
:--- | :----------- | :-----
`getViewsByTags` | `...tagNames: string[]` | `View[]`
`getViewsByTypes` | `...typeNames: string[]` | `View[]`
`getViewsByClasses` | `...classNames: string[]` | `View[]`
`getViewsByStyles` | `...styles: ValPair[]` <br> _ValPair: { name: string, value: string }_ | `View[]`
`getViewsByValPairs` | `...valPairs: ValPair[]` <br> _ValPair: { name: string, value: string }_ | `View[]`
`getViewsByProperties` <br> _Alias: getViewsByProps_ | `...propNames: string[]` | `View[]`
`getViewsByIdentifiers` <br> _Alias: getViewsByIds_ | `...idNames: string[]` | `View[]`

### Native method

The native method **returns only a [view](https://v7.docs.nativescript.org/api-reference/classes/view.html)**. Its name is written in the singular (`getView`...).

Name | Parameter | Returns
:--- | :-------- | :-----
`getViewById` | `idName: string` | `View`

## Known issues

### VSCode IntelliSense

If the following **TypeScript declaration error occurs**, you need to open the application entry point file (and keep it open) or click on the tab of the file already open.

```
Property 'getViewsBy...' does not exist on type 'View'. ts(2339)
```

VSCode IntelliSense now remembers the entry point of the application and recognizes the declaration of new methods.

### Vue.js

The plugin may not work properly with these symlinked. It is because webpack resolves symlinks to their real locations by default.

A workaround for this issue is to manually disable symlinks resolution in webpack:

```javascript
const config = {
  resolve: {
    // resolve symlinks to symlinked modules
    symlinks: false
  }
}
```

## Question? Idea?

If you have a question about how `nativescript-getters` works or an idea to improve it, the [Discussions](https://github.com/bgrand-ch/nativescript-getters/discussions) tab in GitHub is the place to be.

However, if you get an error, you should open an [issue](https://github.com/bgrand-ch/nativescript-getters/issues).

## License

Distributed under the MIT License. See [LICENSE](https://github.com/bgrand-ch/nativescript-getters/blob/main/LICENSE.md) for more information.

## Contact

Benjamin Grand [@bgrand_ch](https://twitter.com/bgrand_ch)
