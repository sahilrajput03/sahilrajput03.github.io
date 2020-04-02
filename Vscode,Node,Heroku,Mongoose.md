## Fastest way to create node project:-

```bash
npm init --yes
```

***

Link - [Beginner's Article, though good things.](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)

• If you want to get on to building your project, and don't want to spend the (albeit brief) time answering the prompts that come from `npm init`, you can use the `--yes` flag on the `npm init` command to automatically populate all options with the default `npm init` values. 

 `npm init --yes` or ` npm init -y `

***

### For details of all the heroku repository:

heroku info

```bash
$ heroku info
OUTPUT:
=== pacific-cliffs-97469
Auto Cert Mgmt: false
Dynos:          web: 1
Git URL:        https://git.heroku.com/pacific-cliffs-97469.git
Owner:          sahilrajput03@gmail.com
Region:         us
Repo Size:      302 KB
Slug Size:      24 MB
Stack:          heroku-18
Web URL:        https://pacific-cliffs-97469.herokuapp.com/
```



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

### Using environment variables in windows:

set : will print all the environment variables

set SAHIL=SOMETHING-ANYTHING

set SAHIL : will print the value of system variable in cmd.

 https://www.poftut.com/how-to-list-set-get-windows-environment-variables-with-set-command-in-command-line-ms-dos/ 

***

### Using environment variables in windows:

```bash
`printenv`
```

***

# Sending response back to the request in express:

response.status(201).send("abrakadabra"); //CONTENT-TYPE:TEXT/HTML, STATUS-CODE:201

response.status(200).json("abrakadabra"); //CONTENT-TYPE:APPLICATION/JSON, STATUS-CODE:200

response.send("abrakadabra"); // CONTENT-TYPE:TEXT/HTML, STATUS-CODE:200

***

# _id and __v while creating objects in mongodb.

_id : unique id

__v : mongo versioning field  

***

# Close all opened opened files:

Ctrl+K , W 	in vscode.

***

```js
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

```

***

# To test `undefined` variable or property:

 Use the `typeof` operator, like this: `if(typeof myVar === 'undefined')`. 

***

# While testing:

You must not be running your server, other wise it will give you error 

```bash
: Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.Error:
```

***

# undefined:

You should never return undefined like:

```js
return undefined
//because it will break the program from an unknown point, and you might never be able to figure out where has the program brocken state has originated from.
SO IF YOU MUST RETURN IT.. use..
return notdefinedvariable
//so this will actually return something you actually looking for.
BUT THIS IS WRONG TOO..
YOU SHOULD NEVER EVER TRY TO RETURN UNDEFINED, IF ITS RETURNING FOR TESTING PURPOSE, ITS GOOD OTHERWISE ITS BAD, BCOZ IT WOULD OTHER ENDS TOO.
>>> NEVER EVER RETURN UNDEFINED <<<<
    
```

***

# What if a function doesn't return nothing(undefined)

It returns undefined.

For e.g., 

```
let kk = () => console.log("buda")
let kkreturn = kk()
console.log(kkreturn)
//outputs: undefined
```

```js
let say:
let kk =() =>{
clg SAHIL
clg MOHIT
return 1
//the function will not reach ..
}

***
let kk =() =>{
clg SAHIL
clg MOHIT
return undefinedVariable
//the function will go on even further....
clg MUMBAI KE HERO.(this will pe printed..)
}
```

***

# Saving a document in mongodb with no id:

```js
{
    _id: null,
    title: "Title-1 is whatever or, every thing in this line is title.",
    author: "Ramanujan",
    url: "https://www.ramanujan.com",
    likes: 499,
    __v: 0
  },
```

If you try to save  this document, then the resultant document saved in the db will have the _id as its property along with the _id value generated by the mongodb.

***

##### All the keybindings have to be removed to map for a command, if the desired shortcut binding is already assigned to many commands.

***

# Now toggle in terminals

Press Alt+Right to move to the right terminal.

Press Alt+Leftto move to the left terminal.

***

# Update only the field which are given in the request by the post request:



***

# Uninstalling npm module:

```bash
npm uninstall bcrypt --save
```

***

# Moongoogse warnings

```js
const mongoose = require('mongoose')
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
```

***

# Importing Exporting in node.js(CommonJS Style)

```js
// testModule.js - DIRECT VARIABLE
module.exports = "This is a test!"

// index.js
const test = require('./testModule.js')
console.log(test) // => "This is a test!"
```

```js
// helpers.js - DIRECT FUNCTION
module.exports = function(x) {
  return x * 2
}
// index.js
const helpers = require('./helpers.js')
helpers(4) // => 8
```

```js
// helpers.js - OBJECT OBJECT
module.exports = {
  multiplyByTwo: function(x) { return x *2 },
  divideByTwo: function(x) { return x / 2}
}
// index.js 
const anyobjectName = require('./helpers.js')
anyobjectName.multiplyByTwo(10) // => 5

// or, you can import just the named property you need - NAMED IMPORT
const divideByTwoRenamed = require('./helpers.js').divideByTwo // if_u_require_to_rename_properties_imported_you_Need_to_do_like_that.
divideByTwoRenamed(18) // => 9
```

```js
// helpers.js - CASE INTERESTING.
module.exports.multiplyByTwo = function(x) { return x * 2 }
module.exports.divideByTwo = function(x) { return x / 2 }
function nonExportedFunction(x) {
  return x * 3
}
// index.js
const helpers = require('./helpers.js/)
const divideByTwoRenamed = require('./helpers.js').divideByTwo // if_u_require_to_rename_properties_imported_you_Need_to_do_like_that.
```

```js
// helpers.js
module.exports.multiplyByTwo = function(x) { return x * 2 }
module.exports.divideByTwo = function(x) { return x / 2 }
module.exports = "I just overwrote all my exports! Don't mix these styles!"
```

Curyying is also made to link with export and imports. Check @ [Link on medium](https://medium.com/@osiolabs/use-module-exports-to-keep-node-js-code-organized-9379526ebac8) .

***


# Coding Conventions:

Classes	Class names should be nouns in UpperCamelCase, with the first letter of every word capitalised. Use whole words — avoid acronyms and abbreviations (unless the abbreviation is much more widely used than the long form, such as URL or HTML).

Methods	Methods should be verbs in lowerCamelCase or a multi-word name that begins with a verb in lowercase; that is, with the first letter lowercase and the first letters of subsequent words in uppercase.

Variables	Local variables, instance variables, and class variables are also written in lowerCamelCase. Variable names should not start with underscore (_) or dollar sign ($) characters, even though both are allowed. This is in contrast to other coding conventions that state that underscores should be used to prefix all instance variables.
Variable names should be short yet meaningful. The choice of a variable name should be mnemonic — that is, designed to indicate to the casual observer the intent of its use. One-character variable names should be avoided except for temporary "throwaway" variables. Common names for temporary variables are i, j, k, m, and n for integers; c, d, and e for characters.

Constants	Constants should be written in uppercase characters separated by underscores. Constant names may also contain digits if appropriate, but not as the first character.

***

###  The built-in JavaScript libraries use the same naming conventions as Java. 

***

While on the nodemon you can restart easily, i.e., when the server has brocken , you may type **rs** and press **Enter** key to restart the server.

And also debugging you can always set marker i.e., tyep something like 

```bash
****hererby brocken already****
and press Enter key to let it print to the console.
```

***

```bash
nodemon server.js
nodemon server.js 3006
```

***

```js
# Convert object to json string:
JSON.stringify(s) // where s is object.
```



***

The **try** statement allows you to define a block of code to be tested for errors while it is being executed.

The **catch** statement allows you to define a block of code to be executed, if an error occurs in the **try** block.

The **finally** statement lets you execute code, after try and catch, regardless of the result.

***

## Callback

`done` is a callback that you need to call once you are done with your work. As you can see it is given in the first line of your code:

```js
function(req, email, password, done){
```

This means that besides the incoming request you get the user-specified `email` and `password`. Now you need to do whatever you need to do to verify the login. Somehow you need to tell Passport whether you succeeded or not.

Normally, you may use a return value for this, but in this case the Passport author thought about the option that your check may be asynchronous, hence using a return value would not work.

This is why a callback is being used. Most often callbacks are being called `callback`, but this is just for convenience, there is no technical reason to do so. In this case, since the callback is being used for showing that you are *done*, the Passport author suggested to call it `done`.

Now you can either call `done` with an error if credential validation failed, or with the appropriate parameters to show that it succeeded.

This works because functions are so-called *first-class citizens* in JavaScript, i.e. there is no actual difference between code and data: In JavaScript you can pass functions around as parameters and return values as you can with data.

And that's it :-)

***

## Callback function

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

Here is a quick example:

```js
function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);
```

The above example is a [synchronous](https://developer.mozilla.org/en-US/docs/Glossary/synchronous) callback, as it is executed immediately.

Note, however, that callbacks are often used to continue code execution after an [asynchronous](https://developer.mozilla.org/en-US/docs/Glossary/asynchronous) operation has completed — these are called asynchronous callbacks. A good example is the callback functions executed inside a `.then()` block chained onto the end of a promise after that promise fulfills or rejects. This structure is used in many modern web APIs, such as `fetch()`.