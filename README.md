# My_Learning-Typescript
My Learning on Typescript programming language

## About
* TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. 
* It offers classes, modules, and interfaces to help you build robust components.
* The compiler is `tsc`. This is used to transpile `.ts` file to `.js`

## Installation
### Ubuntu
- M-1
```console
// globally
$ npm install -g typescript

// locally
$ npm install --save-dev typescript
```
- M-2
```console
$ sudo apt get update
$ sudo apt install node-typescript
```

### MacOS
- M-1
```console
// globally
$ npm install -g typescript

// locally
$ npm install --save-dev typescript
```


## Getting Started
### Windows

#### Write code
```ts
let h = "Hello World"
console.log(h);
```
#### Transpile code
```console
$ ts hello.ts
// generates a `hello.js` file

// M-2
$ ts hello.ts --outFile hello
// generates a `hello` file
```

#### Print code
```console
$ npm hello.js

// OR

$ npm hello
```

### MacOS

#### Write code
```ts
let h = "Hello World"
console.log(h);
```
#### Transpile code
```console
$ tsc hello.ts
// generates a `hello.js` file

// M-2
$ tsc hello.ts --outFile hello
// generates a `hello` file
```

#### Print code
```console
$ node hello.js

// OR

$ node hello
```

## Troubleshooting
### Error: `error TS2304: Cannot find name 'unknown'.`
* Solution:

```
declare global {
  type unknown = any
}
```
### Error: `Not able to print Promise <pending> result`
* Before:
```ts
const eoslime = require('eoslime');

// a promise pending funciton
const randomName = eoslime.utils.randomName();
console.log("Random name: " + randomName);		// => Random name: [object Promise]
```

* After:
```ts
const eoslime = require('eoslime');

// a promise pending funciton
const randomName = eoslime.utils.randomName();
randomName.then(function(result){
	console.log("Random name: " + result);		// => Random name: lfb3a45e344e
})
```

### References
* [TypeScript tutorial in Visual Studio Code](https://code.visualstudio.com/docs/typescript/typescript-tutorial)
* [TypeScript Best Practices — Semicolons and Spacing](https://levelup.gitconnected.com/typescript-best-practices-semicolons-and-spacing-5be9c5963604)
* [Typescript Exercise](https://github.com/typescript-exercises/typescript-exercises/tree/master/src/exercises)
* [Clean code Typescript](https://github.com/labs42io/clean-code-typescript)
* [Understanding `promise` before you start with `async/await`](https://bluepnume.medium.com/learn-about-promises-before-you-start-using-async-await-eb148164a9c8)
