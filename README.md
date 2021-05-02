# NativeScript Getters Plugin

![NPM version](https://img.shields.io/npm/v/nativescript-getters)
![GitHub last commit](https://img.shields.io/github/last-commit/bgrand-ch/nativescript-getters)
![NPM downloads](https://img.shields.io/npm/dw/nativescript-getters)
![NPM bundle size](https://img.shields.io/bundlephobia/min/nativescript-getters)

A NativeScript plugin that adds six new getters – in addition to the native `getViewById` method – to retrieve one or more views by tag, type, class, style, value pair or property.

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

```typescript
import 'nativescript-getters'
```

> New methods have been added into the Frame, Page, layouts, tabs and texts classes. (see [methods](#methods))

### Examples

#### Get views by tags

```typescript
export function navigatingTo(args: EventData) {
  const page = <Page>args.object
  const actionBar = page.getViewsByTags('ActionBar')[0] // case sensitive
  const foundViews = page.getViewsByTags('Label', 'Button')

  console.log('action bar:', actionBar)
  console.log('found views:', foundViews)
}
```

The list of possible tags can be found on the [modules page](https://v7.docs.nativescript.org/api-reference/modules.html) of the NativeScript API documentation. (see "Classes")

#### Get views by types

```typescript
export function navigatingTo(args: EventData) {
  const page = <Page>args.object
  const layouts = page.getViewsByTypes('layout')
  const foundViews = page.getViewsByTypes('field', 'list')

  console.log('layouts:', layouts)
  console.log('found views:', foundViews)
}
```

The list of available types: `bar`, `picker`, `view`, `layout`, `list`, `text`, `tab`, `field` and `form`. (see [types.ts](https://github.com/bgrand-ch/nativescript-getters/tree/main/src/functions/types.ts))

#### Get views by classes

```typescript
export function navigatingTo(args: EventData) {
  const page = <Page>args.object
  const mainTitle = page.getViewsByClasses('h1')[0]
  const foundViews = page.getViewsByClasses('text-primary', 'font-italic')

  console.log('main title:', mainTitle)
  console.log('found views:', foundViews)
}
```

#### Get views by styles

```typescript
export function navigatingTo(args: EventData) {
  const page = <Page>args.object
  const redViews = page.getViewsByStyles(
    { name: 'background', value: 'FF0000' }
  )
  const foundViews = page.getViewsByStyles(
    { name: 'visibility', value: 'collapsed' },
    { name: 'opacity', value: '0.5' }
  )

  console.log('red views:', redViews)
  console.log('found views:', foundViews)
}
```

The list of possible styles can be found on the [style page](https://v7.docs.nativescript.org/api-reference/classes/style.html) of the NativeScript API documentation.

> Note: The color name (example: red or white) is converted by NativeScript to hexadecimal.

#### Get views by val pairs

```typescript
export function navigatingTo(args: EventData) {
  const page = <Page>args.object
  const welcomeTexts = page.getViewsByValPairs(
    { name: 'text', value: 'Welcome' }
  )
  const foundViews = page.getViewsByValPairs(
    { name: 'columns', value: 'auto' },
    { name: 'width', value: '210' }
  )

  console.log('welcome texts:', welcomeTexts)
  console.log('found views:', foundViews)
}
```

The list of possible property names and their values can be found on the [view page](https://v7.docs.nativescript.org/api-reference/classes/view.html) of the NativeScript API documentation.

#### Get views by properties

```typescript
export function navigatingTo(args: EventData) {
  const page = <Page>args.object
  const texts = page.getViewsByProperties('text') // alias: getViewsByProps('text')
  const foundViews = page.getViewsByProperties('columns', 'width')

  console.log('texts:', texts)
  console.log('found views:', foundViews)
}
```

The list of possible property names can be found on the [view page](https://v7.docs.nativescript.org/api-reference/classes/view.html) of the NativeScript API documentation.

#### Get views by identifiers

```typescript
export function navigatingTo(args: EventData) {
  const page = <Page>args.object
  const debugIds = page.getViewsByIdentifiers('debug') // alias: getViewsByIds('debug')
  const foundViews = page.getViewsByIdentifiers('my-id', 'another-id')

  console.log('debug ids:', debugIds)
  console.log('found views:', foundViews)
}
```

### Example in stand-alone mode

```typescript
import { getViewsByTags } from 'nativescript-getters'

export function standaloneMode(view: View) {
  const foundViews = getViewsByTags.call(view, 'Label', 'Button')

  console.log('found views:', foundViews)
}
```

More info about `call()`:

- [Difference between call, apply and bind](https://dev.to/hebashakeel/difference-between-call-apply-and-bind-4p98), by [@hebashakeel](https://twitter.com/hebashakeel)
- [Function.prototype.call()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call), by [@MozDevNet](https://twitter.com/MozDevNet)

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

If the following **TypeScript declaration error occurs**, you need to open the application entry point file (**and keep it open**) or click on the tab of the file already open.

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
