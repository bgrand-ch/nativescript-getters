# (WIP) NativeScript Getters Plugin

A NativeScript plugin that adds five new getters – in addition to the native "getViewById" method – to retrieve one or more views by tag, type, class, property or value pair.

## Getting Started

### Prerequisites

#### The basics

* NativeScript installed and configured. (see [CLI setup](https://docs.nativescript.org/start/quick-setup))
* An IDE with intelligent code completion. (see [VS Code](https://www.nativescript.org/nativescript-for-visual-studio-code))
* A functional project to use the plugin. (see [app templates](https://docs.nativescript.org/app-templates/app-templates))

#### Minimum versions

> In Command prompt / Terminal navigate to your application root folder, run the command `npm install <package-name>@latest --save` to update a package by its name.

* `tns-core-modules` 6.1.2 or higher

> In Command prompt / Terminal navigate to your application root folder, run the command `tns platform update <platform-name>@latest` to update a platform by its name.

* `android-runtime` 6.1.2 or higher
* `ios-runtime` 6.1.1 or higher

### Installation

In Command prompt / Terminal navigate to your application root folder, run one of the following commands to install the plugin. More information on https://docs.nativescript.org/core-concepts/plugins.

```shell
tns plugin add nativescript-getters
```

or

```shell
npm install nativescript-getters --save
```

## Usage

Import the plugin at the top of your JavaScript or TypeScript file. It can be imported only once at the entry point of the application. (see [docs](https://docs.nativescript.org/core-concepts/application-architecture#entry-point))

_JavaScript_

```javascript
require("nativescript-getters");
```

_TypeScript_

```typescript
import "nativescript-getters";
```

Once imported, new methods have been added in the Page class and the Layout classes. (see [methods](#methods))

### Examples

#### Get view by type

_JavaScript_

```javascript
var frame = require("tns-core-modules/ui/frame");

const pageLayout = frame.topmost.currentPage.content;
const layouts = pageLayout.getViewsByType("layout");

console.log("Layouts found:", layouts);
```

_TypeScript_

```typescript
import { topmost } from "tns-core-modules/ui/frame";

const pageLayout: View = topmost.currentPage.content;
const layouts: Array<View> = pageLayout.getViewsByType("layout");

console.log("Layouts found:", layouts);
```

#### Get view by value pair

_JavaScript_

```javascript
var frame = require("tns-core-modules/ui/frame");

const pageLayout = frame.topmost.currentPage.content;
const checkedBoxes = pageLayout.getViewsByValPair("checked", true); // or "true"

console.log("Checked boxes found:", checkedBoxes);
```

_TypeScript_

```typescript
import { topmost } from "tns-core-modules/ui/frame";

const pageLayout: View = topmost.currentPage.content;
const checkedBoxes: Array<View> = pageLayout.getViewsByValPair("checked", true); // or "true"

console.log("Checked boxes found:", checkedBoxes);
```

### Methods

* `getViewsByTag(tag: string): Array<View>`

* `getViewsByTags(...tags: Array<string>): Array<View>`

* `getViewsByType(type: string): Array<View>`

* `getViewsByTypes(...types: Array<string>): Array<View>`

* `getViewsByClass(class: string): Array<View>`

* `getViewsByClasses(...classes: Array<string>): Array<View>`

* `getViewsByProperty(property: string): Array<View>`
  * Aliases: Prop, Attribute or Attr

* `getViewsByProperties(...properties: Array<string>): Array<View>`
  * Aliases: Props, Attributes or Attrs

* `getViewsByValuePair(property: string, value: any): Array<View>`
  * Alias: ValPair

* `getViewsByValuePairs(...valuePairs: Array<object>): Array<View>`
  * Alias: ValPairs

* `getViewsByIdentifiers(...identifiers: Array<string>): Array<View>`
  * Alias: Ids

#### Native method

All previous methods return an array of views. The native method returns only a view. The name of this method is written in the singular (`getView`...).

* `getViewById(identifier: string): View`
  * Alias: Identifier

## License

Distributed under the MIT License. See [LICENSE](LICENSE.md) for more information.

## Contact

Benjamin Grand [@elvticc](https://twitter.com/elvticc)
