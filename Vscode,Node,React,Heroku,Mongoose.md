# Fastest way to creapte node project:-

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

```bash
# common responses

response.status(201).send("abrakadabra"); //CONTENT-TYPE:TEXT/HTML, STATUS-CODE:201


response.status(200).json("abrakadabra"); //CONTENT-TYPE:APPLICATION/JSON, STATUS-CODE:200


response.send("abrakadabra"); // CONTENT-TYPE:TEXT/HTML, STATUS-CODE:200


response.json(notes.map((note) => note.toJSON())); // basically converts the array of objects to array of json. JSON is text, and we can convert any JavaScript object into JSON, and send and receive JSON to the server.

***

# HOW THEN CHAINING WORKS

request.then((response) => response.data).then((d)=>console.log(d))

			^^^^^^^^^^^^^^^^^^^^^^^^^^^^ this is done so as to get it in the next then function as 											the direct variable as d.

***

CHEATTT:

response.send(blogs) // THE ABOVE RESPONSE.JSON(BLAH BLAH BLAH.. ) AND THIS LINE WORKS SAME. Doubt test it. So this means you cansend the js objects as it is. And they appear same as in the browser as well.


***

# http Common usecases and status codes: (for CRUD operations too..)

200,201 - # (OK,SUCCESS), (CREATED,UPDATED)

400,401,402,403 - # (Bad Request, Unauthorised, FAILED Reason-1, FAILED Reason-2, FAILED Reason-3)

Some Default Error codes: 
# Status Code: 500 => 
From moongose library: ValidationError ,User validation failed: username: Path `username` (`d`) is shorter than the minimum allowed length (3)

#
***

# Front end, checking the status of the promise like this -

request.then((response) => console.log("response.status :", response.status));

request.then((response) => alert("response.status :"+ response.status));

***

Although,   request.then((response) => alert("response.status :", response.status)); // doesn't work LOL bcoz using ',' is only supported in console.log(a,b,c,d,e,etc)

Short notes: 	
• console.log()	>> , and + works

• alert() 	   	>> + 	'( , dont work)'

• confirm()		>> + 	'( , dont work)'

• prompt()		>> +	'( , dont work)' , also if nothing is send in prompt, it will return null.


***

Common status code classes:

1xxs – // Informational responses: The server is thinking through the request.

2xxs – // SUCCESS! The request was successfully completed and the server gave the browser the expected response.

3xxs – // Redirection: You got redirected somewhere else. The request was received, but there’s a redirect of some kind.

4xxs – ## Client errors: Page not found. The site or page couldn’t be reached. (The request was made, but the page isn’t valid — this is an error on the website’s side of the conversation and often appears when a page doesn’t exist on the site.)

5xxs – ## Server errors: Failure. A valid request was made by the client but the server failed to complete the request.
```

Blog post link - [Link](https://moz.com/learn/seo/http-status-codes)

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

It was error, 

```js
const isNullOrUndefined = val => val === undefined || val === null;
console.log(isNullOrUndefined(null));        // true
console.log(isNullOrUndefined(undefined));   // true
console.log(isNullOrUndefined('Batman'));    // false
```



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

***

```js
const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}
```

above next() function only works when you specify if in the parameters area as next.

***

ou can have a different theme per workspace/folder by adjusting the `workbench.colorTheme` in the workspace settings.

1. Open a new VSCode window.
2. Open the project folder where you would like to have a different color theme.
3. Navigate to File > Preferences > Settings.
4. Select the "Workspace Settings" tab at the top of the settings screen. Anything you edit in here will now be specific to this workspace.
5. Search for "colorTheme" and select the color theme you would like for this specific workspace.

[![enter image description here](https://i.stack.imgur.com/gigb5.png)](https://i.stack.imgur.com/gigb5.png)

Now, whenever you reopen that folder, the color theme will match what you set in the workspace settings.

***

[[Open files always in a new tab](https://stackoverflow.com/questions/38713405/open-files-always-in-a-new-tab) - LOL](https://stackoverflow.com/questions/38713405/open-files-always-in-a-new-tab)

```JS
LONG STORY SHORT:
Search for 'Preview' in SETTINGS, and DISABLE >> 
# Workbench>Editor:Enable Preview,
also DISBALE >> 
# Workbench>Editor: Enable Preview From Quick Open.

**********************************************************
When you [single-]click a file in the left sidebar's file browser or open it from the quick open menu (Ctrl-P, type the file name, Enter), Visual Studio Code opens it in what's called "Preview Mode", which allows you to quickly view files.

Preview Mode tabs are not kept open. As soon as you go to open another file from the sidebar, the existing Preview Mode tab (if one exists) is used. You can determine if a tab is in Preview Mode, by looking at its title in the tab bar. If the title is italic, the tab is in preview mode.

To open a file for editing (i.e. don't open in Preview Mode), double-click on the file in the sidebar, or single-click it in the sidebar then double click the title of its Preview Mode tab.

If you want to disable Preview Mode all together, you can do so by setting "workbench.editor.enablePreview": false in your settings file. You can also use the "workbench.editor.enablePreviewFromQuickOpen" option to disable it only from the quick open menu.

Before you can disable Preview Mode, you'll need to open your Settings File.

Pro Tip: You can use the Command Palette to open your settings file, just enter "Preferences: Open User Settings"!

Once you've opened your settings file (your settings file should be located on the right), add the "workbench.editor.enablePreview" property, and set its value to false.

You can learn more about Visual Studio Code's "Preview Mode", here.
```

***

Currying/Double arrow functions:

```js
const ui = ()=>(something)=>console.log("I am a "+something)
ui()("Programmer")
//OUTPUT: I am a Programmer.
```

***

## A factory function is any function that returns an object.

**Classes and constructor functions** require the `new` keyword to instantiate objects while **factory functions** return the instantiated object itself.

***

# Factory Functions

A factory function is any function that returns an object. Yup, that's pretty much it. This is not to be confused with classes and [constructor functions](https://www.w3schools.com/js/js_object_constructors.asp). **Classes and constructor functions** require the `new` keyword to instantiate objects while **factory functions** return the instantiated object itself.

```
function factory(name) {
  return { name };
}

const obj = factory('Some Dood');
console.log(obj.name); // 'Some Dood'
```

# Using Closures for Private Variables

We now have all the knowledge needed to emulate "private" variables in JavaScript. We can begin by writing a factory function that returns an object with getter and setter methods. The factory function takes in two arguments that correspond to the "private" properties of the returned object.

```
function createAnimal(name, job) {
  // "Private" variables here
  let _name = name;
  let _job = job;

  // Public variables here
  return {
    // Getter Methods
    getName() {
      return _name;
    },
    getJob() {
      return _job;
    },
    // Setter Methods
    setName(newName) {
      _name = newName;
    },
    setJob(newJob) {
      _job = newJob;
    }
  };
}
```

We can then invoke the factory function to create new instances of an animal object. Note that every time we invoke the factory function, a new closure is created. Therefore, each returned object has access to its own closure.

```
const presto = createAnimal('Presto', 'Digger');
const fluffykins = createAnimal('Fluffykins', 'Jumper');
```

So what have we achieved by doing this? Well, with the power of closures, we have essentially emulated "private" variables in JavaScript.

```js
// These properties will be inaccessible
console.log(presto._name); // undefined
console.log(presto._job); // undefined
console.log(fluffykins._name); // undefined
console.log(fluffykins._job); // undefined

// Getter methods have access to the closure
console.log(presto.getName()); // 'Presto'
console.log(presto.getJob()); // 'Digger'
console.log(fluffykins.getName()); // 'Fluffykins'
console.log(fluffykins.getJob()); // 'Jumper'

// Setter methods can mutate the variables in the closure
presto.setName('Quick');
presto.setJob('Bone Finder');
fluffykins.setName('Mittens');
fluffykins.setJob('Fish Eater');

console.log(presto.getName()); // 'Quick'
console.log(presto.getJob()); // 'Bone Finder'
console.log(fluffykins.getName()); // 'Mittens'
console.log(fluffykins.getJob()); // 'Fish Eater'
```

***

# A Strange Concoction of Programming Paradigms

This workaround is indeed a strange way to achieve a seemingly simple feature of object-oriented languages. But if one were to analyze this very closely, there is beauty in this workaround. For one, it cohesively glues together two different and rather conflicting programming paradigms: [object-oriented](https://en.wikipedia.org/wiki/Object-oriented_programming) and [functional](https://en.wikipedia.org/wiki/Functional_programming) programming.

The object-oriented nature of this approach involves the use of factory functions, mutability, and encapsulation. On the other hand, the functional approach involves the use of closures. JavaScript truly is a multi-paradigm language that continues to blur the borders between the contrasting paradigms.

One could argue that gluing the two paradigms together is messy and peculiar. In my opinion, I wouldn't say that that's *entirely* correct. Even if the amalgamation of paradigms does not follow conventions and design patterns, I find it greatly fascinating that to implement an object-oriented feature in JavaScript, one must use the features of functional programming. The two contradicting paradigms work together in harmony, similar to that of the [yin and yang](https://en.wikipedia.org/wiki/Yin_and_yang). Despite their differences, there is always a way to make things work. Perhaps this could be an analogy for life?

Link to blogpost: [@dev.to](https://dev.to/somedood/emulating-private-variables-in-javascript-with-closures-and-factory-functions-2314)

***

## Instance variable: 

In object-oriented programming with classes, an **instance variable** is a **variable** defined in a class (i.e. a member **variable**), for which each instantiated object of the class has a separate copy, or **instance**. An **instance variable** is similar to a class **variable**.

***

# Local Storage

```js
localStorage.setItem("lastname", "Smith");
localStorage.setItem("key", "value");
localStorage.getItem("lastname");
localStorage.removeItem("key");
```

***

# Delete a line

### Ctrl+shift+k

NOTE: Ctrl + X will cut and paste it to the clipboard.

***

# Select a block in vscode

Alt + Shift + Right/Left

Remember: Alt + Shift + Up/ Down => will cause the line/s to to duplicate as you do in the direction with arrow.

***

# Move a window to right Column:

Ctrl+Alt+Right Arrow

***

# Switch Active window in multiple windows

Ctrl+1, Ctrl+2, Ctrl+3

***

# Cancel tab switching

While holding Ctrl+tab, press `

***

```
A political map is a map that shows the political boundaries of that particular area. ... Political maps are designed to show governmental boundaries of countries, states, and counties, the location of major cities, and they usually include significant bodies of water.
```

***

# `

### Backtick, Grave Accent Character  - Used in Template literal in Javascript

Accent acute and, like the other one, changes the pronunciation of the vowel.

**left quote**, **open quote**, **back quote**,**backquote** is a punctuation mark

***

You can fastly convert an promise.then chain to an async function, by right-clicking it and and clicking "quick fix"

![image-20200406173142224](../../../AppData/Roaming/Typora/typora-user-images/image-20200406173142224.png)

and it would be like:

<img src="../../../AppData/Roaming/Typora/typora-user-images/image-20200406173248098.png" alt="image-20200406173248098" />

***

### Snipping Tools sucks

You can always keep snipping tool minimized and let it capture easily with hotkey - ctrl+printscreen. and when its done click new and press esc.

***

# axio.delete

```
So after a number of tries, I found it working.

Please follow the order sequence it's very important else it won't work

axios.delete(URL, {
  headers: {
    Authorization: authorizationToken
  },
  data: {
    source: source
  }
});
```

***

# For testing in single file via nodemon

```js
const axios = require("axios"); // and not the es6 import axios from 'axios'
```

***

# Axio Helpl

https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index

^^^ cheatsheet

***

# Axios single file testing

via **nodemon**

`nodemon <Axios_commands_file.js>`

```js
// import axios from "axios"
const axios = require("axios");
const baseUrl = "/api/blogs";
const instance = axios.create({
  baseURL: baseUrl,
  proxy: {
    host: "localhost",
    port: 3003,
  },
});

const deleteWithId = (id) => {
  console.log("Deletion executed..");
  const request = instance.delete(`/${id}`);
  return request.then((response) => response.data);
};

const getAll = () => {
  const request = instance.get('/');
  return request.then((response) => console.log(response.data));
};

// getAll()

// deleteWithId('5e88e91c7573ee2664ad2a39');
```

help @ [axios cheatsheet](https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index)

***

# Or you may directly configure config inline in axios

```js

const deleteWithId = (id) => {
  console.log("Deletion executed..");
  const request = axios.delete(`${baseUrl}/${id}`, {
    proxy: {
      host: "localhost",
      port: 3003,
    },
  });
  return request.then((response) => response.data);
};  
    
    or
    
const deleteWithId = (id) => {
  console.log("Deletion executed..");
  // const request = instance.delete(`/${id}`);
  const request = axios.delete(`/${id}`, {
    baseURL: baseUrl,
    proxy: {
      host: "localhost",
      port: 3003,
    },
  });
  return request.then((response) => response.data);
};
```

***



```js
# Getting expert with promise:-
//everything returned from a .then method is a promise.

 //to fetch the array of data from it, you need to assign from inside it

 // like .then(t=>variable=t) and variable will be assigned the data from the promise.
***
//IF YOU WANT TO CONSOLE LOG THE DATA FROM THE PROMISE RESPONSE, DO IT LIKE THIS.
request.then((response) => console.log("response.data :", response.data));// data returned
request.then((response) => console.log("response.status :", response.status)); //status code returned
return request.then((response) => response.data);
// YOU NEED TO CONSOLE LOG BEFORE RETURNING ONLY.
```



***

# Epic nature of react:

So, its been great to see what react can do, and how it does. First of all, the useState hook, this hook is great not just as it automatically creates the setter function for the given variable. e.g., 

```js
const [notes,setNotes] = useState('InitialNotesArrayState')
```

here setNotes is function that sets the notes array whenever we like it to do that. This is not as much interesting as we used to think of if earlier, as its just a  function, BUT its hell of much interesting in nature as the siginificant role of the hook lies when the notes array state is changed with the setNotes function; it renders ALL THE COMPONENTS which are related to notes state array.

Next, useEffect() is interesting hook as it renders the all the componets under the the tag in which you are working in the index.html. This might seem to be complicated to hear. But it is not, it is just meant to say that react only works on the element it has been griped to render in the index.html with the help of ReactDOM.render() function.

```js
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
```

That's just not even the beginning of the useEffect() hook. As its sole purpose is to update the components in the DOM from the virtual DOM via detecting the defined changes. It's just that we can define when to update the DOM. So what are these defined chages, so these are to be defined in a weird way. This is weird because you can use this hook to SUPER ACTIVE MODE, so what's that now. Lets look with example.

```js
useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
      setreadyToFetch(true);
    }
  }, []);
```

so the above code ony update the DOM at the time of page load(first load). So that just means you may define some code operations when the rendering has been done to the page. And this isn't helpful to loading some content from the server but to do other specific operation which are peculiar. Like what I'm doing here is fetching the saved user from the localStorage from the browser. Although, other asynchronous operation like loading the blogs are already done before the hook started as useEffect hook only executes when the page has completed rendering. The point of explaining this is to explain about the ciritical parameter(2nd parameter i.e., []) if we wish to do so. This parameter tells the hook to only execute once. But what if we defined something inside the array, or we just don't specify the array like ommitting the array. What happens in these two cases? So in the former case if we define some hook states inside the array like-

```js
useEffect(() => {
    user &&
      readyToFetch &&
      blogService
        .getAll()
        .then((initialNotes) =>
          setBlogs(initialNotes.sort((a, b) => b.likes - a.likes))
        ) &&
      setreadyToFetch(false);
    // console.log("useeffect executed..");
  }, [user, readyToFetch]);
```

So, here in this example I've initialized it with two arguments i.e., user and readyToFetch hook states. This is to make the hook execute only if these state hook states change, not in any other circumstance. You can check these saying by making some changes to these somewhere in the code and putting a `console.log(' hook executed')` in the useEffect hook. 

What about the latter case, i.e., omitting the array from the useEffect hook. This is actually interestingIt does that. It executes with every hook state change in the code. So, like 

```js
useEffect(()=>{
    console.log('Yama Yama, hu haa hu haa!!')
    console.log('Yo YO, Puku PUku!!')
  })
```

It looks for all the other hooks like useState, useEffect, etc and when the execute it executes too. 
Also, you can call/use any other hook inside this hook. Like setNote(notesNew), setUser(loggedInUserFromLocalStorage),

Happy coding!! So hooks are real.

***

Code Folding: 

To fold all - Ctrl+K Ctrl+ 0
To unfold all - Ctrl+K Ctrl+J

To fold at current cursor- Ctrl+Shift+[
To unfold at current cursor- Ctrl+Shift+]

Tip: Folding can be done on certain levels with Ctrl + K Ctrl+1 to Ctrl +5.

where 1 refers to closing below 1st members, 2 refers to closing below 2nd members, and so on...

Remember: Ctrl+K Ctrl+J , unfolds all.

***

# Emmet Cheatsheet: https://docs.emmet.io/cheat-sheet/

****

# Adding type checking

![image-20200407225203530](../../../AppData/Roaming/Typora/typora-user-images/image-20200407225203530.png)

*

![image-20200407225230056](../../../AppData/Roaming/Typora/typora-user-images/image-20200407225230056.png)

***

To just select the file without opening or closing or collapsing or expanding, hold the ctrl key and select the file/folder in the left side Explorer.

***

Jump to next error: F8

***

defer: put off (an action or event) to a later time; postpone.

***

## Simple Destructing to get a property of the object:

```js
let obj = {name:"sahil",lastname:"rajput"}
let {name} = obj
let {lastname} = obj
//name and lastname are "sahil" and "rajput" respectively.
```

***

### What the heck is eventloop anyway -video on youtube fron jsconf

```js
console.log('hi')
setTimeout(()=> console.log('there'),0)
console.log('JSConfEU')
console.log('JSConfEU')
console.log('JSConfEU')
console.log('JSConfEU')
console.log('JSConfEU')
console.log('JSConfEU')
console.log('JSConfEU')
console.log('JSConfEU')
console.log('JSConfEU')
console.log('JSConfEU')
console.log('JSConfEU')
console.log('JSConfEU')
console.log('JSConfEU')
console.log('JSConfEU')
console.log('JSConfEU')
console.log('JSConfEU')
//output below...
VM322:1 hi
VM322:3 JSConfEU
VM322:4 JSConfEU
VM322:5 JSConfEU
VM322:6 JSConfEU
VM322:7 JSConfEU
VM322:8 JSConfEU
VM322:9 JSConfEU
VM322:10 JSConfEU
VM322:11 JSConfEU
VM322:12 JSConfEU
VM322:13 JSConfEU
VM322:14 JSConfEU
VM322:15 JSConfEU
VM322:16 JSConfEU
VM322:17 JSConfEU
VM322:18 JSConfEU
VM322:2 there
```

### The event loops job is to look at the stack and look at the task queue. If the stack is empty(the currently running code), it takes the first thing on the queue and pushes it on to the stack, which effectively runs it. That all what happens when we come across an async call.

Chrome v8 engine has multiple api with c++, but what we are allowed to work with is the Javascript Runtime Environment. So JS Runtime Environment is single threaded and executes its tasks with help of a stack like.

main()... then next command .... then next command.....and so on...

```js
console.log('hi')
setTimeout(()=> console.log('there1'),0)
console.log('JSConfEU')
console.log('JSConfEU')
console.log('JSConfEU')
console.log('JSConfEU')
console.log('JSConfEU')
console.log('JSConfEU')
setTimeout(()=> console.log('there2'),0)
console.log('JSConfEU')
console.log('JSConfEU')
console.log('JSConfEU')
console.log('JSConfEU')
console.log('JSConfEU')
setTimeout(()=> console.log('there3'),0)
console.log('JSConfEU')
console.log('JSConfEU')
console.log('JSConfEU')
console.log('JSConfEU')
console.log('JSConfEU')

//output below
hi
VM341:3 JSConfEU
VM341:4 JSConfEU
VM341:5 JSConfEU
VM341:6 JSConfEU
VM341:7 JSConfEU
VM341:8 JSConfEU
VM341:10 JSConfEU
VM341:11 JSConfEU
VM341:12 JSConfEU
VM341:13 JSConfEU
VM341:14 JSConfEU
VM341:16 JSConfEU
VM341:17 JSConfEU
VM341:18 JSConfEU
VM341:19 JSConfEU
VM341:20 JSConfEU
undefined
VM341:2 there1
VM341:9 there2
VM341:15 there3
```

***

### Callbacks can be one of two things:

Callback can be any fuction that calls another function OR callbacks can be more explicitly an asynchronous callback as in one that will get pushed back on the callback queue in the future.

```js
[2,3,5,6,6].forEack((t)=>console.log(t))
```

In the above example, forEach is an callback but it is not running asynchronously, it's running it within the current stack.

***

## **Array.reduce**

```js
const arr = [2,3,4,5]
let reducedValue = arr.reduce((acc,cur)=>acc+cur ,10)	//here 10 is an optional parameter, if omitted it would be considere 0.
//output: reducedValue is 24, as 10+2+3+4+5=24

const arr = [2,3,4,5]
arr.pop()
console.log(arr)
//output: [2,3,4]

const arr = [2,3]
let reducedValue = arr.reduce((acc,cur)=>acc*cur ,10)
//output: reducedValue is 60, as 10*2*30

const noteArray = [{},{},{}]
let reducedValue = popo.reduce((acc,cur)=>acc+cur.likes,0)
```

***

# **How promises work:**

```js
SIMPLEST PROMISE EVER:
fetch('url')
fetch('google.com').then((d)=>console.log(d)).catch(err=> console.log(err)).finally(()=>console.log('Bulbul'))
// also you might see the cors error.. has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled//
```

```js
fun = () => new Promise(resolve => {
setTimeout(()=>console.log('tik-tick'),1_000)
})
fun() //simple promise
```

```js
//promise resolving/asynchronous calling in sequence/serially.
fun().then((t)=>{
if(t==='continuee'){
    fun(1).then((t)=>{
if(t==='continuee'){
    fun(2).then((t)=>{
if(t==='continuee'){
    fun(3).then((t)=>{
if(t==='continuee'){
    fun(4).then((t)=>{
if(t==='continuee'){
    fun(5).then((t)=>{
if(t==='continuee'){
    fun(6)
}
})
}
})
}
})
}
})
}
})
}
})
```

```js
new Promise(resolve => {setTimeout(() => resolve(3), 2000)})
        .then(d => (d*d)).then((ee)=> console.log(ee)) // first resolve returns whats inside it.
```



```js
//EXECUTE THE CODE IN ONCE IN CHROME CONSOLE.
flag = confirm('Press OK to resolve promise, Cancel to reject promise')
												//or manually assign true/false
let timeOutCountdown = 2
let timeOut= (secs) => {
   	for(let i=secs;i>-1;i--)
       	setTimeout(()=>console.log(i),(secs-i)*1000)
}
timeOut(timeOutCountdown)
let  rideHospital = new Promise((resolve,reject)=>{ 	// here resolve and reject are the methods to
    let futureExecution = () =>	{					  // to return appropriate values fed to them
    	if(flag){									// on some condition(mostly fetched 														   // asynchronously).
	        resolve(`Happy life, long life. Promise is RESOLVED bcoz you are awesome. FLAG: ${flag}`)
    	}
		else{
			reject(`BastardS drink everyday. Promise is REJECTED bcoz you are lazy. FLAG: ${flag}`)
            //you should definitely handle it, by providing .catch statement and fetch the above 				// rejected value from the promise, like below.
    	}
	}
    setTimeout(futureExecution,(timeOutCountdown+1)*1000)
})
rideHospital.then((value)=>console.log(value)).catch(err => console.log(err))
									//	err.name and err.message yield undefined.
console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nFollow the confirm box:')
```

***

```
The reason above code works without even declaring the flag, (as let flag; flag = false/true), is that if you don't declare they become become global variables. YES THEY DOOO.. ITS JS.
pLEASE READ: BELOW ARTICLE FOR JS PRACTISES.
```

[Javascript best practises, a must guide for every js developer. @ W3SCHOOLS.COM](https://www.w3schools.com/js/js_best_practices.asp)

```js

let  rideHospital = new Promise((resolve,reject)=>{ ..// here rideHospital is creator
rideHospital.then((coco)=>console.log(coco..// here rideHospital is consumer.
**
//ADDING .finally() IN THE PROMISE CONSUMER
rideHospital.then((coco)=>console.log(coco)).finally(()=>{console.log('.finallyexecuted')})  

***
PROMISE CREATOR AND PROMISE CONSUMER MUST BE DIFFERENT // consumer// only executes when promise is resolved, if fulfilled .then is EXECUTED followed by .finally AND IF rejected .catch is EXECUTED followed by .finally(()=>{...your code here// finally doesn't have a available parameter to deal with})

setTimeout(()=>console.log("hula"),1000)
setTimeout(()=>console.log("hula"),1000)
setTimeout(()=>console.log("hula"),1000)
setTimeout(()=>console.log("hula"),1000)
//execute above code in once, will cause to execute them altogher with a few milliseconds difference.

setTimeout(()=>console.log("hula"),1000)
setTimeout(()=>console.log("hula"),2000)
setTimeout(()=>console.log("hula"),3000)
setTimeout(()=>console.log("hula"),4000)
//execute above code in once.
Executing above statements works greater.

**** Actual TIMEOUT function:
let timeOut= (secs) => {
    for(let i=secs;i>-1;i--)
        setTimeout(()=>console.log(i),(secs-i)*1000)
}
timeOut(10)
//this creates a 10 sec timer.
```

# Define your own error:

```js
new Error('LOL Error')
Error: LOL Error
    at <anonymous>:1:1
new Error('LOL Error').name
"Error"
new Error('LOL Error').message
"LOL Error"
```

# Amazing promise example

```js
// run below code as once in chrome dev tools
new Promise((_,reject) =>
reject(new Error("Fail")))
    .then(value =>
console.log('handler 1'))
    .catch(reason => {
 console.log('caught failure ' + reason)
 return 'nothing'
})
.then(value => console.log('handler 2', value)) // lastly returned 'nothing' would be returned here as value
```



***

# **Scheduling: setTimeout and setInterval**

We may decide to execute a function not right now, but at a certain time later. That’s called “scheduling a call”.

There are two methods for it:

- `setTimeout` allows us to run a function once after the interval of time.
- `setInterval` allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.

These methods are not a part of JavaScript specification. But most environments have the internal scheduler and provide these methods. In particular, they are supported in all browsers and Node.js.

## [setTimeout](https://javascript.info/settimeout-setinterval#settimeout)

The syntax:

```javascript
let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
```

Parameters:

- `func|code`

  Function or a string of code to execute. Usually, that’s a function. For historical reasons, a string of code can be passed, but that’s not recommended.

- `delay`

  The delay before run, in milliseconds (1000 ms = 1 second), by default 0.

- `arg1`, `arg2`…

  Arguments for the function (not supported in IE9-)

For instance, this code calls `sayHi()` after one second:

```javascript
function sayHi() {
  alert('Hello');
}

setTimeout(sayHi, 1000);
```

With arguments:

```javascript
function sayHi(phrase, who) {
  alert( phrase + ', ' + who );
}

setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John
```

**Pass a function, but don’t run it**

Novice developers sometimes make a mistake by adding brackets `()` after the function:

```javascript
// wrong!
setTimeout(sayHi(), 1000);
```

That doesn’t work, because `setTimeout` expects a reference to a function. And here `sayHi()` runs the function, and the *result of its execution* is passed to `setTimeout`. In our case the result of `sayHi()` is `undefined` (the function returns nothing), so nothing is scheduled.

***

# Always work with let, unless you are required to use const, becozzz...

```js
let cars
let cars
//above two statements cause error as it is already declared// try executing both statement in once // try executing both statements one by one.

const cars = 20 
const cars = 20
//even const doesn't live in harmony even alone, i.e.,
const cars // even this statement will produce error, that initialization missing..
```

***

```js
let furu = (val) =>{
        setTimeout("console.log('hey yeahh');console.log('hey yeahh')",3000)
}
// ABOVE statement doesn't work, BUT BELOW ONE hits....

let furu = (val) =>{
        setTimeout("console.log('hey yeahh')",3000)
}
```

***

### You should never ever use status variable , in  node or  chrome dev tools, as it is in use by  the environment.

***

### [Canceling with clearTimeout](https://javascript.info/settimeout-setinterval#canceling-with-cleartimeout)

A call to `setTimeout` returns a “timer identifier” `timerId` that we can use to cancel the execution.

The syntax to cancel:

```javascript
let timerId = setTimeout(...);
clearTimeout(timerId);
```

In the code below, we schedule the function and then cancel it (changed our mind). As a result, nothing happens:

```javascript
let timerId = setTimeout(() => alert("never happens"), 1000);
alert(timerId); // timer identifier

clearTimeout(timerId);
alert(timerId); // same identifier (doesn't become null after canceling)
```

As we can see from `alert` output, in a browser the timer identifier is a number. In other environments, this can be something else. For instance, Node.js returns a timer object with additional methods.

Again, there is no universal specification for these methods, so that’s fine.

For browsers, timers are described in the [timers section](https://www.w3.org/TR/html5/webappapis.html#timers) of HTML5 standard.

***

## [setInterval](https://javascript.info/settimeout-setinterval#setinterval)

The `setInterval` method has the same syntax as `setTimeout`:

```javascript
let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
```

All arguments have the same meaning. But unlike `setTimeout` it runs the function not only once, but regularly after the given interval of time.

To stop further calls, we should call `clearInterval(timerId)`.

The following example will show the message every 2 seconds. After 5 seconds, the output is stopped:

```javascript
// repeat with the interval of 2 seconds
let timerId = setInterval(() => alert('tick'), 2000);

// after 5 seconds stop
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
```

**Time goes on while `alert` is shown**

In most browsers, including Chrome and Firefox the internal timer continues “ticking” while showing `alert/confirm/prompt`.

So if you run the code above and don’t dismiss the `alert` window for some time, then in the next `alert` will be shown immediately as you do it. The actual interval between alerts will be shorter than 2 seconds.

## [Nested setTimeout](https://javascript.info/settimeout-setinterval#nested-settimeout)

There are two ways of running something regularly.

One is `setInterval`. The other one is a nested `setTimeout`, like this:

```javascript
/** instead of:
let timerId = setInterval(() => alert('tick'), 2000);
*/

let timerId = setTimeout(function tick() {
  alert('tick');
  timerId = setTimeout(tick, 2000); // (*)
}, 2000);
```

The `setTimeout` above schedules the next call right at the end of the current one `(*)`.

The nested `setTimeout` is a more flexible method than `setInterval`. This way the next call may be scheduled differently, depending on the results of the current one.

For instance, we need to write a service that sends a request to the server every 5 seconds asking for data, but in case the server is overloaded, it should increase the interval to 10, 20, 40 seconds…

Here’s the pseudocode:

```javascript
let delay = 5000;

let timerId = setTimeout(function request() {
  ...send request...

  if (request failed due to server overload) {
    // increase the interval to the next run
    delay *= 2;
  }

  timerId = setTimeout(request, delay);

}, delay);
```

And if the functions that we’re scheduling are CPU-hungry, then we can measure the time taken by the execution and plan the next call sooner or later.

**Nested `setTimeout` allows to set the delay between the executions more precisely than `setInterval`.**

Let’s compare two code fragments. The first one uses `setInterval`:

```javascript
let i = 1;
setInterval(function() {
  func(i++);
}, 100);
```

The second one uses nested `setTimeout`:

```javascript
let i = 1;
setTimeout(function run() {
  func(i++);
  setTimeout(run, 100);
}, 100);
```

For `setInterval` the internal scheduler will run `func(i++)` every 100ms:

Did you notice?

**The real delay between `func` calls for `setInterval` is less than in the code!**

That’s normal, because the time taken by `func`'s execution “consumes” a part of the interval.

It is possible that `func`'s execution turns out to be longer than we expected and takes more than 100ms.

In this case the engine waits for `func` to complete, then checks the scheduler and if the time is up, runs it again *immediately*.

In the edge case, if the function always executes longer than `delay` ms, then the calls will happen without a pause at all.

And here is the picture for the nested `setTimeout`:

**The nested `setTimeout` guarantees the fixed delay (here 100ms).**

That’s because a new call is planned at the end of the previous one.

**Garbage collection and setInterval/setTimeout callback**

When a function is passed in `setInterval/setTimeout`, an internal reference is created to it and saved in the scheduler. It prevents the function from being garbage collected, even if there are no other references to it.

```javascript
// the function stays in memory until the scheduler calls it
setTimeout(function() {...}, 100);
```

For `setInterval` the function stays in memory until `clearInterval` is called.

There’s a side-effect. A function references the outer lexical environment, so, while it lives, outer variables live too. They may take much more memory than the function itself. So when we don’t need the scheduled function anymore, it’s better to cancel it, even if it’s very small.

## [Zero delay setTimeout](https://javascript.info/settimeout-setinterval#zero-delay-settimeout)

There’s a special use case: `setTimeout(func, 0)`, or just `setTimeout(func)`.

This schedules the execution of `func` as soon as possible. But the scheduler will invoke it only after the currently executing script is complete.

So the function is scheduled to run “right after” the current script.

For instance, this outputs “Hello”, then immediately “World”:

```javascript
setTimeout(() => alert("World"));

alert("Hello");
```

The first line “puts the call into calendar after 0ms”. But the scheduler will only “check the calendar” after the current script is complete, so `"Hello"` is first, and `"World"` – after it.

There are also advanced browser-related use cases of zero-delay timeout, that we’ll discuss in the chapter [Event loop: microtasks and macrotasks](https://javascript.info/event-loop).

**Zero delay is in fact not zero (in a browser)**

In the browser, there’s a limitation of how often nested timers can run. The [HTML5 standard](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers) says: “after five nested timers, the interval is forced to be at least 4 milliseconds.”.

Let’s demonstrate what it means with the example below. The `setTimeout` call in it re-schedules itself with zero delay. Each call remembers the real time from the previous one in the `times` array. What do the real delays look like? Let’s see:

```javascript
let start = Date.now();
let times = [];

setTimeout(function run() {
  times.push(Date.now() - start); // remember delay from the previous call

  if (start + 100 < Date.now()) alert(times); // show the delays after 100ms
  else setTimeout(run); // else re-schedule
});

// an example of the output:
// 1,1,1,1,9,15,20,24,30,35,40,45,50,55,59,64,70,75,80,85,90,95,100
```

First timers run immediately (just as written in the spec), and then we see `9, 15, 20, 24...`. The 4+ ms obligatory delay between invocations comes into play.

The similar thing happens if we use `setInterval` instead of `setTimeout`: `setInterval(f)` runs `f` few times with zero-delay, and afterwards with 4+ ms delay.

That limitation comes from ancient times and many scripts rely on it, so it exists for historical reasons.

For server-side JavaScript, that limitation does not exist, and there exist other ways to schedule an immediate asynchronous job, like [setImmediate](https://nodejs.org/api/timers.html) for Node.js. So this note is browser-specific.

## [Summary](https://javascript.info/settimeout-setinterval#summary)

- Methods `setTimeout(func, delay, ...args)` and `setInterval(func, delay, ...args)` allow us to run the `func` once/regularly after `delay` milliseconds.
- To cancel the execution, we should call `clearTimeout/clearInterval` with the value returned by `setTimeout/setInterval`.
- Nested `setTimeout` calls are a more flexible alternative to `setInterval`, allowing us to set the time *between* executions more precisely.
- Zero delay scheduling with `setTimeout(func, 0)` (the same as `setTimeout(func)`) is used to schedule the call “as soon as possible, but after the current script is complete”.
- The browser limits the minimal delay for five or more nested call of `setTimeout` or for `setInterval` (after 5th call) to 4ms. That’s for historical reasons.

Please note that all scheduling methods do not *guarantee* the exact delay.

For example, the in-browser timer may slow down for a lot of reasons:

- The CPU is overloaded.
- The browser tab is in the background mode.
- The laptop is on battery.

All that may increase the minimal timer resolution (the minimal delay) to 300ms or even 1000ms depending on the browser and OS-level performance settings.

Historic article: https://javascript.info/settimeout-setinterval#canceling-with-cleartimeout

***

## status variable

![image-20200409193434110](../../../AppData/Roaming/Typora/typora-user-images/image-20200409193434110.png)

```js
status = false
false
if (status){
console.log('its true actually')
}
VM8549:2 its true actually
undefined
status === false
false
//YOU DO NOT EVER WANT TO SEE THIS THING EVER IN LIFE, if yes remember never blame JS
```

***

```js
•Clear chrome developers tool's variables with command:
window.location.reload();// OR SIMPLY location.reload(); // actually reloads the page.// Actually you may use ctrl+l and reload instantly.

OR use braces to encode the code:
{
    ..code here....
}
```

***

```js
a*2
//NaN
```

***

[HOW TO RUN ASYNC JAVASCRIPT FUNCTIONS IN SEQUENCE OR PARALLEL](https://jrsinclair.com/articles/2019/how-to-run-async-js-in-parallel-or-sequential/)

***

# Serialization

The process whereby an object or data structure is translated into a format suitable for transferral over a network, or storage (e.g. in an array buffer or file format).

In [JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript), for example, you can serialize an object to a [JSON](https://developer.mozilla.org/en-US/docs/Glossary/JSON) [string](https://developer.mozilla.org/en-US/docs/Glossary/string) by calling the [function](https://developer.mozilla.org/en-US/docs/Glossary/function) [`JSON.stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

[CSS](https://developer.mozilla.org/en-US/docs/Glossary/CSS) values are serialized by calling the function [`CSSStyleDeclaration.getPropertyValue()`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyValue).

***

# Set custom port for react server

```js
    "start": "set PORT=3009 && react-scripts start",
//in package.json
```

***

Chrome Dev TOols : Ctrl+ shift + j/i for elements/console OR••

 •F12 for Elements(Chrome dev tools.)

***

Change dock Style: Ctrl + shift + d.

You may edit styes in html pages if they are located in some css file. Check all the .css files in website via pressing ctrl+p and typing .css and it will localte the .css files, Alternatievely you may click on the the line number mentioned in the right side css style panel in the elements tab. And from there you will be redirected to the file, so make changes there and you would be having an option to save the file via right clicking in the file after making the desired changes to the file, all changes you would make are hot updates, i.e., it updates as you type.

* Selecting an element in elements tab, you may press H to hide the element.
* You may click any element and select, scroll to view to move the screen on the item.
* You may add attributes like id and class to the element by right clicking.
* You may add focus: or hover: or visited or OTHER state to the element by right clicking on it.
* you may add the css classes for the elements right away in the right side STYLES section in the ELEMENTS tab, it features autocompletion, so all the related classes from the bootstrap will be there to autocomplete your softhand.
* YOu may do 
  `$('h1').style.color = 'blue'` in console insead of queryselector i.e., document.querySelector('h1').style.color = 'blue'
* Use console.error() in js to log errors to the console.
* and use console.warning() in js to log errors to the console.
* USE 'LIVE SERVER' FROM RITWICK DEY AND USE LIVE HOTRELOAD FEATURE. TO use it you must open the server via right clicking the file and select open with live server. OR Alt+L , O
* 

***

Ctrl + \ to split editor in VSCODE.

***

When you simply changes the theme, via pressing Ctrl + shift + p and searhcing for 'color theme' and setting theme, you are actually setting the theme for the local folder or workspace/workbench.

***

# JavaScript toFixed() Method

```JS
Math.random() // returns a number
//output: 0.18762558122571837 //17 digits after decimal. (sometimes its 15,16,18,etc)
var num = 5.56789;
var n = num.toFixed(2);
//output: "5.57"
var p = num.toFixed() OR num.toFixed(0) // assign the number of decimal digits
//output: "5"
Number("23445")
//output: 23445 // its number, whats suppied was string.
"2352.0".toFixed(2)//
//output: 2352.00
let car = 2345252
car.toFixed(2)
//output: "2345252.00"
Number(car.toFixed(2))
//output: 2345252
let car = 2345252.234
Number(car.toFixed(2))
//output: 2345252.23
Number(232525)
232525
Number(232525.00000000)
232525
Number(232525.000000001)
232525.000000001
that'S ENOUGH PLAYING WITH Number()
```

***

# Favourite Theme:

SWITCH THEMES INSTANTLY VIA, 

### CTRL+K CTRL+T 

**Themes**: Monokai is FAVOURITE, 
Monokai Dim (is like more off blue and off colours)

* For backend: Kimbie Dark (is like browninsh)

***

alt + <space> , c >> CLOSE WINDOW, 
ctrl+k, f >> closing a folder/workspace. (release ctrl after pressing k), 
Ctrl+k Ctrl+o >> open a folder dialog box.
Alt+f, Alt+k >> open a workspace dialog box.

***

```
try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
```

***

