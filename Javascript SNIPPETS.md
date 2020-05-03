### % - Remainder Operator. This is often reffered to as modulo.

Link - @[medium](https://medium.com/javascript-in-plain-english/here-are-some-useful-javascript-snippets-47f4fa75bdd4)

- **isNullOrUndefined : check whether a value is null or undefined.**

- ```js
  // IDEALLY you should use below, it covers all the edgecases, its fair and square:
  if(typeof bullshit === 'undefined' || bullshit === null ){
  console.log('YES..GHOST..') 
      // more code here...
  }else{
      // more code here...
  }
  ```

  

```js
# DEEP RESEARCH:
const isNullOrUndefined = val => val === undefined || val === null;
console.log(isNullOrUndefined(null));        // true
console.log(isNullOrUndefined(undefined));   // true
let poom // not intialized, hence undefined 			#DECLARE VARIABLE
>> undefined
let carl = undefined // explicityl defined undefined 	 #DECLARE VARIABLE
>> undefined
let roy = null // explicity defined null 				#DECLARE VARIABLE
>> null
isNullOrUndefined(poom)
true
isNullOrUndefined(carl)
true
isNullOrUndefined(roy)
true
isNullorUndefined(someUndeclaredVariable)				// #UNDECLARED VARIABLE
>># THROWS ERROR, HENCE YOU HAVE TO HANDLE IT, or do it in the below way. 
if(typeof someUndeclaredVariable === 'undefined'){
console.log('GHOST...(its undeclared)') 				// #UNDECLARED VARIABLE
}
```



```js
//LEARN ABOUT THE ERORRS, Try executing the below code in chrome dev tools, OR NODE
try{
    console.log(someundefinedvariable)
}
catch(err){
console.log('\n\n---Informative Info..\n\n')
console.log('errObjectItself:',err,'\n') // err = err.stack // it helps in finding the line of error 
console.log('err.toString():',err.toString(),'\n')
console.log('err.name:',err.name,'\n')
console.log('err.message:',err.message)
}
```



# Deal with specific error:

```js
try{
    console.log(someundefinedvariable)
}
catch(err){
if(err.name==='ReferenceError'){
	console.log('It is reference error, buddy.')
	}
}

```



- **isLowerCase : Used to determine whether a string is lower case or not.**

```
const isLowerCase = str => str === str.toLowerCase();console.log(isLowerCase('Batman'));         // false
console.log(isLowerCase('jamesbond007'));   // true
console.log(isLowerCase('FLASH'));  
```



***

### Copying object from one to another

```JS
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

```

***

### Hell yeah operators  ||

```js
false || false || false || console.log('hell yeahh')
//output: hell yeah

false || false || true || console.log('hell yeahh')
//output: true
Basically || trails executes only the one statement it gets after concurrent false events.
```

***

### Hell yeah &&

```js
true && true && true && console.log('hell yeahh')
//output: hell yeah

true &&true && false && console.log('hell yeahh')
//output: false
```

***

```js
const setPersonObject = (obj, ...defs) =>{ 
	//define object model here..
    console.log(obj,defs)
    // if you console log, above statement, then 1st parameter is real, rest all make an array. Get length of array with (defs.length) Array.length and use it accordingly.
    return 'what object you wanted with the model specified'
}
setDefaultObject(10,2,3,4,5,6)
//output: 
```

***

#### Reversing the elements in an array.

```js
let tutu = [2,3,4,5,6]
tutu.reverse()
//output: Array=>(5) [6, 5, 4, 3, 2]; tutu array has been modified.
```

***

## Smooth Scroll:

```js
//not tested yet
smoothScroll : can be used to smoothly scroll the element on which it is called into the visible area of the browser window.
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });
// scrolls smoothly to the element with the id elementID
smoothScroll('#elementID');              
// scrolls smoothly to the first element with class name - elementClassName
smoothScroll('.elementClassName');
```

***

- **Arrays Intersection: Returns elements present in both the arrays.**

```js
const matchingElements = (array1, array2) => 
             array1.filter(element => array2.includes(element));var heroes = ['Batman', 'Superman', 'X-Men', 'Captain America'];
var dcUniverse = ['Batman', 'Superman', 'Joker', 'Lex Luthor'];console.log(matchingElements(heroes, dcUniverse));Output -->
[ 'Batman', 'Superman' ]
```

***

- **Array Difference : Finds the difference between two arrays.**

```js
const arrayDiff = (array1, array2) => {
  const setArray = new Set(array2);
  return array1.filter(arr => !setArray.has(arr));
};var heroes = ['Batman','Flash','Superman','Wolverine']
var justiceLeaque = arrayDiff(heroes, ['Wolverine']);console.log(justiceLeaque);Output -->
[ 'Batman', 'Flash', 'Superman' ]
```

***

- **Splitting of multi line string : splits a multi-line string into an array of lines.**

```js
const splitLines = str => str.split(/\r?\n/);
console.log(splitLines('First Line\nSecond Line\nThird Line\nFourth Line'));Output --> 
[ 'First Line', 'Second Line', 'Third Line', 'Fourth Line' ]
```

***

### PRECEDENCE - 

```js
System Diaolic:
true !== true && true
//output: false
// Since,===, !===, ==, !=, &&, || HAVE SAME PRECEDENCE, so the expression is evaluated from LEFT TO RIGHT.
//double operator i.e. ==, != DOES WEIRDY TYPE CONVERSIONS WHILE COMPARING of the operands given to them, SO WE AVOID THEM.
WHENEVER YOU THINK PRECEDENCE IS MAKING YOU MAD, JUST USE PARENTHESES
SIMPLE e.g.
2 + 3 *3
//output: 11
(2 + 3) *3
//output: 15
somthining about precedence: 
|| has lowest precedence, then comes &&, then the comparison operators(>,==, and so on.)
```

***

- **Removing Duplicates : Will remove duplicate values from an array.**

```js
const removeDuplicates = arr => [...new Set(arr)];
console.log(removeDuplicates([11, 22, 22, 33, 44, 44, 55]));Output -->
[ 11, 22, 33, 44, 55 ]
```

***

```js
let arr = [2,3,6,4,3]
last element = arr.pop()
```

***

See other snippets 127 @ https://medium.com/better-programming/127-helpful-javascript-snippets-you-can-learn-in-30-seconds-or-less-part-1-of-6-bc2bc890dfe5

***

