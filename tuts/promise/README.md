# Promise

## About

- Promise type is associated with a function defined like this i.e. with `async`:

```ts
async function setData(): Promise<void> {}
async function setData(): Promise<number> {
  let num = 3;
  return num;
}
async function setData(): Promise<String> {
  let s = "alice";
  return s;
}
```

- Promise type functions are called with `await`
- `await` can be used for a function only inside `async` function. So, prefix `await` to the function which calls a promise function.
