## Never run tests via file -

```bash
$ jest <file-name>
$ jest <you don\'t need to enter the path to the file, just the name of the file>
i.e.,For e.g., jest test/lessons/mongoclient.test.js
	you can write: 
	$ jest mongoclient 
	# this would be sufficient to run the file
    // Jest did not exit one second after the test run has completed. This error is due to bad internet connection.

# This usually means that there are asynchronous operations that weren\'t stopped in your tests. Consider running Jest with `--detectOpenHandles` to troubleshoot this issue.
# MOSTLY: IF ALL THE CODE IS CORRECT THEN, 100% OF THE TIMES THE CONNECTION TO THE DATABASE IS THE ISSUE. i.e., internet is not good to keep up with the database request like closing the database.
# The best solution to this is to run the db locally on the mongoDB compass. And if you need the database import it with 
$ mongorestore --drop --gzip --db sample_mflix --uri "mongodb://localhost/" mflix/data/data/sample_mflix/
```

***

```bash
## Testing all tests in a file:
$ jest path/to/my-test.js 
or just
$ jest my-test  #jest will fetch file location automatically.
```

***

## Running tests with a specific name in test-desc or describe-desc:

```js
npx jest -t 'a specific note is within the returned notes'
npx jest -t '<test-name>' || '<test-description>' (single or double quotes)
```

The provided **parameter** can refer to the **name of the test** or the **describe block**. The parameter can also contain just a **part of the name**.

***

###  The following command will run all of the tests that contain *notes* in their name:

```js
npx jest -t 'notes' --runInBand // runInBand implies to run tests sequentially.
								//This can be useful for debugging.
```

***

### Install Jest *globally*:

```js
npm install -g jest
```

Then you can run tests directly with the *jest* command and to install packages globally you need to have admin rights.

***

# Use **toEqual** for testing objects, and use **toBe** method to compare the values.

```bash
expect(somefunctn).toBe(36);  // Object.is equality

expect(somefunctn).toEqual({});   // deep equality
### 								this one actually tests the insides of the object to object's 										properties.
```

***

### Deleting object's properties:

 var person = {
 firstName:"John",
 lastName:"Doe",
 age:50,
 eyeColor:"blue"
};

delete person.age; 

***

### Working with lodash

DOCUMENTATION:  https://lodash.com/docs/4.17.15 

 https://stackoverflow.com/questions/40329742/removing-object-properties-with-lodash 

*var* _ = require('lodash');

Learn more of lodash: [1](https://www.youtube.com/watch?v=kdfikit351Y) , [2](https://stackoverflow.com/search?q=lodash+count+item), [3](https://www.youtube.com/results?search_query=lodash), 

***

```bash
git remote show origin
```

***

### [Get the element with the highest occurrence in an array]

 https://stackoverflow.com/questions/1053843/get-the-element-with-the-highest-occurrence-in-an-array 

```js
function mode(array)
{
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}
mode(["a","b","b","b","b","c","c","c"])
// Output : b
```

***

## Remove all duplicates in an array

tags: #Remove duplicates in array, #Unique array, #remove all duplicates, #only unique; [Link](https://www.geeksforgeeks.org/how-to-convert-set-to-array-in-javascript/)

- [ ] ```js
  GETTING UNIQUE ARRAY FORM OLD ARRAY
  const arrayUnion = ["sahil","mohit","sahil"]
  const uniqSet = [...new Set(arrayUnion)];
  const uniqArray = Array.from(uniqSet) # also, let uniqArray = [...uniqSet]; this works too.
  // uniqArray => ["sahil","mohit"]
  ```

***

We specified the mode of the application to be *development* in the *npm run watch* script that uses nodemon. We also specified that the default *npm start* ==command== will define the mode as *production*

There is a slight issue in the way that we have specified the mode of the application in our scripts: it will not work on Windows. We can correct this by installing the [cross-env](https://www.npmjs.com/package/cross-env) package with the command:

```bash
npm install --save-dev cross-env
```

***

 https://github.com/sahilrajput03/sahilrajput03.github.io/raw/master/96x96.png 

 https://github.com/sahilrajput03/sahilrajput03.github.io/blob/master/96x96.png 

***

 In some situations, it can be beneficial to implement some of the backend tests by mocking the database instead of using a real database. One library that could be used for this is [mongo-mock](https://github.com/williamkapke/mongo-mock). 

***

 It would be better to run our tests using a database that is installed and running in the developer's local machine. The optimal solution would be to have every test execution use its own separate database. This is "relatively simple" to achieve by [running Mongo in-memory](https://docs.mongodb.com/manual/core/inmemory/) or by using [Docker](https://www.docker.com/) containers. We will not complicate things and will instead continue to use the MongoDB Atlas database. 

****

```js
if (process.env.NODE_ENV === 'test') {  MONGODB_URI = process.env.TEST_MONGODB_URI}
```

 The code imports the environment variables from the *.env* file if *it is not* in production mode. In production mode our application will use the environment variables defined in Heroku. 

***

Our tests are already using the [afterAll](https://facebook.github.io/jest/docs/en/api.html#afterallfn-timeout) function of Jest to close the connection to the database after the tests are finished executing. Jest offers many other [functions](https://facebook.github.io/jest/docs/en/setup-teardown.html#content) that can be used for executing operations once before any test is run, or every time before a test is run.

```js
afterAll(() => {
  mongoose.connection.close()
})
```

Let's initialize the database *before every test* with the [beforeEach](https://jestjs.io/docs/en/api.html#aftereachfn-timeout) function:

```js
beforeEach(async () => {
  await Note.deleteMany({})

  let noteObject = new Note(initialNotes[0])
  await noteObject.save()

  noteObject = new Note(initialNotes[1])
  await noteObject.save()
})
```

***

More logging tools (suggested by fullstackopen.com)- 

1.  https://www.papertrail.com/ 
2.  https://www.graylog.org/ 

***

```js
document.getElementById('id').click()
```

***

```js
beforeEach(async () => {
  await Blog.deleteMany({});

  let noteObject = new Blog(helper.initialBlogs[0]);
  await noteObject.save();

  noteObject = new Blog(helper.initialBlogs[1]);
  await noteObject.save();

  noteObject = new Blog(helper.initialBlogs[2]);
  await noteObject.save();
});

//all above code can be put in insdie test before test in a test file.
```

***

# [Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout](https://stackoverflow.com/questions/49603939/async-callback-was-not-invoked-within-the-5000ms-timeout-specified-by-jest-setti)

```js
// jest.setup.js
jest.setTimeout(30000)
// by default jest waits for 5 seconds for async to let it return the data, but sometimes the async functn returns afte 30,001ms, so you just missed it.
```

```js
//jest.config.js
module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js']
}
```

***

# watch mode in tests:

```bash
jest -t <test_name, test_description> --watch
jest <filename> --watch
#now anytime you can stop the execution of the tests with *q*
#rerun just press *Enter* key.
```

***

## ==If testing is slow  , it means your internet connection sucks; better do testing on locally running database servers.==

***

```js
/ The second parameter in map and foreach loop is index of the array
var myArray = [123, 15, 187, 32]
myArray.forEach(function (value, i) {
    console.log('%d: %s', i, value);
});
```

***

