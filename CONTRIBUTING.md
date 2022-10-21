# Contributing

 1. **Fork** the repo on GitHub
 2. **Clone** the project to your own machine
 3. **Commit** changes to your own branch
 4. **Push** your work back up to your fork
 5. Submit a **Pull request** so that we can review your changes

> Be sure to merge the latest from "upstream" before making a pull request!

## How to run the project locally on your machine?

1. Install dependencies in root folder, src folder and demo folder with `npm install` on each folder.
2. Start an Android emulator or iOS simulator.
3. From root folder, run `npm run dev` in a terminal tab.
4. From root folder, run `npm run debug:android -- --path demo` (or `npm run debug:ios -- --path demo`) in another terminal tab.

> You have to be careful with the update of dependencies, this can cause a certain number of errors, especially related to TypeScript.
