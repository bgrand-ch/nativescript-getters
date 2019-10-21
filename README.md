# (WIP) NativeScript Getters Plugin
A NativeScript plugin that adds four new getters – in addition to the native "getViewById" method – to retrieve one or more views by tag, type, property or value pair.

## Getting Started

### Prerequisites

The basics:

* NativeScript installed and configured (see [CLI Setup](https://docs.nativescript.org/start/quick-setup))
* An IDE with intelligent code completion (see [VS Code](https://www.nativescript.org/nativescript-for-visual-studio-code))
* A functional project to use the plugin (see [App Templates](https://docs.nativescript.org/app-templates/app-templates))

Minimum versions:
> From the shell at the root of your project folder, write the command `npm install package-name --save` to update a package by its name.

* `tns-core-modules` 6.1.2 or higher

### Installation

From the shell at the root of your project folder, write one of the following commands to install the plugin. More information on https://docs.nativescript.org/core-concepts/plugins.

```shell
npm install nativescript-getters --save
```

or

```shell
tns plugin add nativescript-getters
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

### Methods

* `getViewByTag(tag: string): Array<View>`

* `getViewByTags(...tags: Array<string>): Array<View>`

* `getViewByType(type: string): Array<View>`

* `getViewByTypes(...types: Array<string>): Array<View>`

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

### Examples

Get view by tag:
```typescript
import { topmost } from "tns-core-modules/ui/frame";

const pageLayout: View = topmost.currentPage.content;
const fields: Array<View> = pageLayout.getViewByTag("TextField");

console.log("Fields found:", fields);
```

Get view by type:
```typescript
import { topmost } from "tns-core-modules/ui/frame";

const pageLayout: View = topmost.currentPage.content;
const layouts: Array<View> = pageLayout.getViewByType("layout");

console.log("Layouts found:", layouts);
```

## License
Distributed under the MIT License. See [LICENSE](LICENSE.md) for more information.

## Contact
Benjamin Grand [@elvticc](https://twitter.com/elvticc)
