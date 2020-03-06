Link - [Beginner's Article, though good things.](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)

• If you want to get on to building your project, and don't want to spend the (albeit brief) time answering the prompts that come from `npm init`, you can use the `--yes` flag on the `npm init` command to automatically populate all options with the default `npm init` values. 

 `npm init --yes` or ` npm init -y `

***

heroku info

***

npm run eject: [What does this “react-scripts eject” command do?](https://stackoverflow.com/questions/48308936/what-does-this-react-scripts-eject-command-do)

***

Comment in node package.json file: add the comments as object:

```json
{
  "name": "napolux-frontend",
  "version": "1.0.0",
  "description": "it's a test",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "MIT",
  "devDependencies": {
    "@babel/core": "^7.2.2",
    "@babel/preset-env": "^7.3.1",
    "babel-polyfill": "^6.26.0",
    "gulp": "^4.0.0",
    "gulp-babel": "^8.0.0",
    "gulp-rename": "^1.4.0",
    "gulp-uglify": "^3.0.1"
  },
  "dependencies": {
    "jquery": "^3.3.1"
  },
  "comments": {
    "dependencies": "we use jQuery because of reasons",
    "repository": "our beloved repo",
    "license": "we love MIT, so why not",
    "devDependencies": {
      "@babel/core": "it's @ version 7.2.2 because of...",
      "gulp-rename": "why not"
    }
  }
}
```

***

It might seem that the "npm start" in script is just unnecessary when when you have watch(which you use for nodemon index.js) but the truth is heroku or other server only runs the default npm start to start your application on the server. So you always keep statements from the package.json file and keep them in comments if you have some doubts about the usage. If you comment the "npm start" in the comment section and push to heroku, it just wont start the web application.

***

Alt + 232 => Gives Epsilon. That is last in alphabetical order.

```
α  alpha        U+03B1  Alt 224
Γ  gamma        U+0393  Alt 226
δ  delta        U+03B4  Alt 235
ε  epsilon      U+03B5  Alt 238
Θ  theta        U+0398  Alt 233
π  pi           U+03C0  Alt 227
Σ  sigma upper  U+03A3  Alt 228
σ  sigma lower  U+03C3  Alt 229
τ  tau          U+03C4  Alt 231
Φ  phi upper    U+03A6  Alt 232
φ  phi lower    U+03C6  Alt 237
Ω  omega        U+03A9  Alt 234
```

***

## Manage Big file awesomely

Open a file in two sections as separate but still one hardlink .. 

Try => Ctrl + \ will open the currently opened file in another window.

***

## **Region specific comments:**

//#region anyblahblah

/*

Everything here is commented ....

*/

//#end region anyblahblah

***

## Folding and unfolding of region specific comments 

• Ctrl+Shift+**[** , Ctrl+shift+**]**  to fold and unfold single **region specific comments**.
• Ctrl+**K+0** , Ctrl+**K+J** to to fold and unfold all the **region specific comments**.

***

Amazing link helped to solve: [@stackoverflow..](https://stackoverflow.com/questions/1921628/how-to-implement-regions-code-collapse-in-javascript)

***

Ctrl + R =>> Open recent projects in vscode.;

Ctrl + (KO) to open a folder.

***

```js
//#region Baap Jyada

console.log("hello");
/* 
* With help of Better Comments
! Important thing 
TODO: You may follow  
? Important Love
* You May follow things like this. 
console.log("message");
console.log("message");  */

//#endregion
```

***

When executables are installed via npm packages, npm creates links to them:

- **local** installs have links created at the `./node_modules/.bin/` directory
- **global** installs have links created from the global `bin/` directory (for example: `/usr/local/bin` on Linux or at `%AppData%/npm` on Windows)
- Windows: C:\Users\chetan\AppData\Roaming\npm OR %AppData%/npm

***

 facet :  one side of something many-sided, especially of a cut gem. ;  a particular aspect or feature of something. 

***

About npm modules: some modules(**eslint,express,nodemon,react-scripts**) install globally with the executables in the home folder i.e. C:\Users\chetan\AppData\Roaming\npm , but other modules do install  but not with the executables in the folder C:\Users\chetan\AppData\Roaming\npm. So its not odd for different modules to have executables and some don't.

***

[Freecodecamp - npm vs npx](https://www.freecodecamp.org/news/npm-vs-npx-whats-the-difference/)

***

