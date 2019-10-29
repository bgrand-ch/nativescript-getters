# NativeScript Getters Plugin

![Npm version](https://img.shields.io/npm/v/nativescript-getters)
![GitHub last commit](https://img.shields.io/github/last-commit/elvticc/nativescript-getters)
![Npm downloads](https://img.shields.io/npm/dw/nativescript-getters)
![Npm bundle size](https://img.shields.io/bundlephobia/min/nativescript-getters)

A NativeScript plugin that adds five new getters – in addition to the native "getViewById" method – to retrieve one or more views by tag, type, class, property or value pair.

## Getting Started

### Prerequisites

#### The basics

&#160;&#160;&#10033;&#160;&#160;NativeScript installed and configured. (see [CLI setup](https://docs.nativescript.org/start/quick-setup)) <br>
&#160;&#160;&#10033;&#160;&#160;An IDE with intelligent code completion. (see [VS Code](https://www.nativescript.org/nativescript-for-visual-studio-code)) <br>
&#160;&#160;&#10033;&#160;&#160;A functional project to use the plugin. (see [app templates](https://docs.nativescript.org/app-templates/app-templates)) 

#### Minimum versions

&#160;&#160;&#10033;&#160;&#160;[tns-core-modules](https://docs.nativescript.org/releases/upgrade-instructions#upgrading-tns-modules), 6.1.2 or higher <br>
&#160;&#160;&#10033;&#160;&#160;[android-runtime](https://docs.nativescript.org/releases/upgrade-instructions#upgrading-platforms), 6.1.2 or higher <br>
&#160;&#160;&#10033;&#160;&#160;[ios-runtime](https://docs.nativescript.org/releases/upgrade-instructions#upgrading-platforms), 6.1.1 or higher <br>
&#160;&#160;&#10033;&#160;&#160;ECMAScript, 2015 (ES6) or higher

### Installation

In Command prompt / Terminal navigate to your application root folder and run one of the following commands to install the plugin. (see [docs](https://docs.nativescript.org/core-concepts/plugins))

```shell
tns plugin add nativescript-getters
```

or

```shell
npm install nativescript-getters --save
```

> The `--save` flag will add the plugin as dependency in your `package.json` file.

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
<br>

> New methods have been added in the Frame, Page, tabs, layouts and texts classes. (see all [methods](#methods))

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

All methods **return an array of views**, except for the native method `getViewById` and its alias.

Name | Parameter(s)
:--- | :-----------
`getViewsByTag` | `tagName: string`
`getViewsByTags` | `...tagNames: Array<string>`
`getViewsByType` | `typeName: string`
`getViewsByTypes` | `...typeNames: Array<string>`
`getViewsByClass` | `className: string`
`getViewsByClasses` | `...classNames: Array<string>`
`getViewsByProperty` <br> _Aliases: Prop, Attribute or Attr_ | `propertyName: string`
`getViewsByProperties` <br> _Aliases: Props, Attributes or Attrs_ | `...propertyNames: Array<string>`
`getViewsByValuePair` <br> _Alias: ValPair_ | `propertyName: string` <br> `propertyValue: string\|number\|boolean`
`getViewsByValuePairs` <br> _Alias: ValPairs_ | `...valuePairs: Array<IValuePair>` <br> _IValuePair: `{ propertyName: string, propertyValue: string\|number\|boolean }`_
`getViewsByIdentifiers` <br> _Alias: Ids_ | `...identifierNames: Array<string>`

### Native method

The native method **returns only a view**. Its name is written in the singular (`getView`...).

Name | Parameter
:--- | :--------
`getViewById` <br> _Alias: Identifier_ | `id: string`

## License

Distributed under the MIT License. See [LICENSE](https://github.com/elvticc/nativescript-getters/blob/master/LICENSE) for more information.

## Contact

Benjamin Grand [@elvticc](https://twitter.com/elvticc)
