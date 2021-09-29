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

## Getting Started
### Write code
```ts
let h = "Hello World"
console.log(h);
```
### Transpile code
```console
$ ts hello.ts
// generates a `hello.js` file

// M-2
$ ts hello.ts --outFile hello
// generates a `hello` file
```

### Print code
```console
$ npm hello.js

// OR

$ npm hello
```

### References
* [TypeScript tutorial in Visual Studio Code](https://code.visualstudio.com/docs/typescript/typescript-tutorial)
* [TypeScript Best Practices — Semicolons and Spacing](https://levelup.gitconnected.com/typescript-best-practices-semicolons-and-spacing-5be9c5963604)
