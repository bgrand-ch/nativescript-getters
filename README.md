# (WIP) NativeScript Getters Plugin

A NativeScript plugin that adds five new getters – in addition to the native "getViewById" method – to retrieve one or more views by tag, type, class, property or value pair.

## Getting Started

### Prerequisites

The basics:

* NativeScript installed and configured. (see [CLI setup](https://docs.nativescript.org/start/quick-setup))
* An IDE with intelligent code completion. (see [VS Code](https://www.nativescript.org/nativescript-for-visual-studio-code))
* A functional project to use the plugin. (see [app templates](https://docs.nativescript.org/app-templates/app-templates))

Minimum versions:

> From the shell at the root of your project folder, write the command `tns plugin update <plugin-name>` to update a plugin by its name. (see [docs](https://docs.nativescript.org/tooling/docs-cli/lib-management/plugin-update))

* `tns-core-modules` 6.1.2 or higher

> From the shell at the root of your project folder, write the command `tns platform update <platform-name>` to update a platform by its name. (see [docs](https://docs.nativescript.org/tooling/docs-cli/project/configuration/platform-update))

* `android-runtime` 6.1.2 or higher
* `ios-runtime` 6.1.1 or higher

### Installation

From the shell at the root of your project folder, write one of the following commands to install the plugin. More information on https://docs.nativescript.org/core-concepts/plugins.

```shell
tns plugin add nativescript-getters
```

or

```shell
npm install nativescript-getters --save
```

## Usage

Import the plugin at the top of your JavaScript or TypeScript file.

JavaScript:

```javascript
var getters = require("nativescript-getters");
```

TypeScript:

```typescript
import * as getters from "nativescript-getters";
```

### Examples

#### Get view by type

JavaScript:

```javascript
var frame = require("tns-core-modules/ui/frame");

const pageLayout = frame.topmost.currentPage.content;
const layouts = pageLayout.getViewByType("layout");

console.log("Layouts found:", layouts);
```

TypeScript:

```typescript
import { topmost } from "tns-core-modules/ui/frame";

const pageLayout: View = topmost.currentPage.content;
const layouts: Array<View> = pageLayout.getViewByType("layout");

console.log("Layouts found:", layouts);
```

#### Get view by value pair

JavaScript:

```javascript
var frame = require("tns-core-modules/ui/frame");

const pageLayout = frame.topmost.currentPage.content;
const checkedBoxes = pageLayout.getViewByValPair("checked", true); // or "true"

console.log("Checked boxes found:", checkedBoxes);
```

TypeScript:

```typescript
import { topmost } from "tns-core-modules/ui/frame";

const pageLayout: View = topmost.currentPage.content;
const checkedBoxes: Array<View> = pageLayout.getViewByValPair("checked", true); // or "true"

console.log("Checked boxes found:", checkedBoxes);
```

### Methods

* `getViewByTag(tag: string): Array<View>`

* `getViewByTags(...tags: Array<string>): Array<View>`

* `getViewByType(type: string): Array<View>`

* `getViewByTypes(...types: Array<string>): Array<View>`

* `getViewByClass(class: string): Array<View>`

* `getViewByClasses(...classes: Array<string>): Array<View>`

* `getViewByProperty(property: string): Array<View>`
  * Aliases: Prop, Attribute or Attr

* `getViewByProperties(...properties: Array<string>): Array<View>`
  * Aliases: Props, Attributes or Attrs

* `getViewByValuePair(property: string, value: any): Array<View>`
  * Alias: ValPair

* `getViewByValuePairs(...valuePairs: Array<object>): Array<View>`
  * Alias: ValPairs

* `getViewByIdentifier(identifier: string): View`
  * Alias: Id (native method)

* `getViewByIdentifiers(...identifiers: Array<string>): Array<View>`
  * Alias: Ids

## License

Distributed under the MIT License. See [LICENSE](LICENSE.md) for more information.

## Contact

Benjamin Grand [@elvticc](https://twitter.com/elvticc)
