# (WIP) NativeScript Getters Plugin

A NativeScript plugin that adds five new getters – in addition to the native "getViewById" method – to retrieve one or more views by tag, type, class, property or value pair.

## Getting Started

### Prerequisites

#### The basics

* NativeScript installed and configured. (see [CLI setup](https://docs.nativescript.org/start/quick-setup))
* An IDE with intelligent code completion. (see [VS Code](https://www.nativescript.org/nativescript-for-visual-studio-code))
* A functional project to use the plugin. (see [app templates](https://docs.nativescript.org/app-templates/app-templates))

#### Minimum versions

In Command prompt / Terminal navigate to your application root folder and run the command `npm install <package-name>@latest --save` to update a package by its name.

* tns-core-modules, 6.1.2 or higher

Run also the command `tns platform update <platform-name>@latest` to update a platform by its name.

* android-runtime, 6.1.2 or higher
* ios-runtime, 6.1.1 or higher

You must verify that the ECMAScript version of JavaScript is **es6** or higher. At the root of a TypeScript project folder, the files `tsconfig.json` and `tsconfig.tns.json` are used to define this version.

### Installation

In Command prompt / Terminal navigate to your application root folder and run one of the following commands to install the plugin. More information on https://docs.nativescript.org/core-concepts/plugins.

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

Once imported, new methods have been added in the Frame, Page, tabs, layouts and texts classes. (see all [methods](#methods))

### Examples

#### Get view by tags

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

#### Get view by type

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

#### Get view by value pair

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

### Methods

* `getViewsByTag(tagName: string): Array<View>`

* `getViewsByTags(...tagNames: Array<string>): Array<View>`

* `getViewsByType(typeName: string): Array<View>`

* `getViewsByTypes(...typeNames: Array<string>): Array<View>`

* `getViewsByClass(className: string): Array<View>`

* `getViewsByClasses(...classNames: Array<string>): Array<View>`

* `getViewsByProperty(propertyName: string): Array<View>`

  * Aliases: Prop, Attribute or Attr

* `getViewsByProperties(...propertyNames: Array<string>): Array<View>`

  * Aliases: Props, Attributes or Attrs

* `getViewsByValuePair(propertyName: string, propertyValue: string|number|boolean): Array<View>`

  * Alias: ValPair

* `getViewsByValuePairs(...valuePairs: Array<{ propertyName: string, propertyValue: string|number|boolean }>): Array<View>`

  * Alias: ValPairs

* `getViewsByIdentifiers(...identifierNames: Array<string>): Array<View>`

  * Alias: Ids

#### Native method

All previous methods return an array of views. The native method returns only a view. The name of this method is written in the singular (`getView`...).

* `getViewById(id: string): View`

  * Alias: Identifier

## License

Distributed under the MIT License. See [LICENSE](LICENSE.md) for more information.

## Contact

Benjamin Grand [@elvticc](https://twitter.com/elvticc)
