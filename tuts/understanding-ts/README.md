# Understanding Typescript

## Learning

* In order to open a `.html` file & view the code, load it manually. Also, in case of updating with new code, compile `ts` to `js` & then load the `.html` file manually in the web browser.
* So, in order to show up the changes in the front-end as the code is updated, refer to the following steps:
  - add `package.json` file using `$ npm init` command.
  - add the package: `lite-server` into the project via `$ npm install --save-dev lite-server`
  - add a script in the `package.json` file:
  
    ```json
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "lite-server"
    },
    ```
    
  - Now, start the app via `$ npm start`, it opens a tab in the browser window. Do <kbd>cmd+opt+j</kbd> to show console. <kbd>ctrl+c</kbd> to shutdown the open port.
  - Now, edit the `app.ts` file -->> compile via `$ tsc app.ts` in a separate terminal tab -->> Now, just switch to the browser tab, you will find the update code is reflected in the console window. Hence, no need to manually load a browser tab.
  - DONE! ✅
* <u>Add package</u>: Thereafter, if any new package is to be added to the repository, just run `$ npm install <pkg>`.
* <u>Update package</u>: Just update the version no. corresponding to the target package in the `package.json` file & then run `$ npm i` or `npm install`. The updated pkg is installed in the `node_modules/` folder.
