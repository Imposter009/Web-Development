/*
todo::JAVASCRIPT

!Variable Scope:
+var : Variable can be re-declared & updated. A global scope variable.
+let : Variable cannot be re-declared but can be updated. A block scope variable.
+const : Variable cannot be re-declared or updated. A block scope variable.

!Loops
?For-of loop:
  :The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object.Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.
  Synatx::
  for (variable of iterable)
    statement
  eg:
  const array1 = ['a', 'b', 'c'];
  
  for (const element of array1) {
    console.log(element);
  }
  * Variables declared with var are not local to the loop, i.e. they are in the same scope the for...of loop is in.
  You can use const to declare the variable as long as it's not reassigned within the loop body. Otherwise, you can use let.
  {
      // Iterating over a string
      const iterable = "boo";
  
   for (const value of iterable) {
     console.log(value);
   }
   // "b"
   // "o"
   // "o"
  }
  {
      // Iterating over a map
      const iterable = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3],
   ]);
  
   for (const entry of iterable) {
     console.log(entry);
   }
   // ['a', 1]
   // ['b', 2]
   // ['c', 3]
   
   for (const [key, value] of iterable) {
     console.log(value);
   }
   // 1
   // 2
   // 3
  }
  {
      // Iterating over the arguments object
      function foo() {
    for (const value of arguments) {
      console.log(value);
    }
   }
  \
   foo(1, 2, 3);
   // 1
   // 2
   // 3
  }
  
?For-in loop:
 { 
  :used for objects and arrays. gives key of the object.
  for(let key in obj_name){obj_name[key]}
  :Object.prototype.objCustom = function () {};
  :Array.prototype.arrCustom = function () {};
  
  const iterable = [3, 5, 7];
  iterable.foo = "hello";
  
  for (const i in iterable) {
    console.log(i);
  }
  // "0", "1", "2", "foo", "arrCustom", "objCustom"
 }
 The object iterable inherits the properties objCustom and arrCustom because it contains both Object.prototype and Array.prototype in its prototype chain.The for...in loop logs only enumerable properties of the iterable object. It doesn't log array elements 3, 5, 7 or "hello" because those are not properties — they are values. It logs array indexes as well as arrCustom and objCustom, which are actual properties. 

*The for...in statement iterates over the enumerable string properties of an object, while the for...of statement iterates over values that the iterable object defines to be iterated over.
  
!Template Literals
:a way to have embedded expressions in string.eg:let a=2; let s=`hello world ${a}`

!Array Methods:
:concat() : Joins two or more arrays, and returns a copy of the joined arrays
:copyWithin(): The copyWithin() method shallow copies part of an array to another location in the
same array and returns it, without modifying its size. Syntax: arr.copyWithin(target) ~or~ arr.copyWithin(target, start) ~or~ arr.copyWithin(target, start, end) eg:: [1, 2, 3, 4, 5].copyWithin(0, 3); // [4, 5, 3, 4, 5]
:entries(): Returns a key/value pair Array Iteration Object
:every(): Checks if every element in an array pass a test. arr.every(callback(element[, index[, array]])[, thisArg])
:fill(): Fill the elements in an array with a static value. arr.fill(value[, start[, end]])
:filter(): Creates a new array with every element in an array that pass a test. var newArray = arr.filter(callback(element[, index[, array]])[, thisArg]) eg words.filter(word => word.length > 6)
:find(): Returns the value of the first element in an array that pass a test
:findIndex(): Returns the index of the first element in an array that pass a test
:forEach(): Calls a function for each array element. arr.forEach(function callback(currentValue[, index[, array]])  eg::array1.forEach(function(element) {
console.log(element); });
:from(): Creates an array from an object
:includes(): Check if an array contains the specified element
:indexOf(): Search the array for an element and returns its position
:isArray(): Checks whether an object is an array
:join(): Joins all elements of an array into a string
:keys(): Returns a Array Iteration Object, containing the keys of the original array 
:lastIndexOf(): Search the array for an element, starting at the end, and returns its position
:map(): Creates a new array with the result of calling a function for each array element. arr.map(function callback(currentValue[, index[, array]]) {// Return element for new_array}[, thisArg]) eg: array1.map(x => x * 2)
:pop(): Removes the last element of an array, and returns that element
:push(): Adds new elements to the end of an array, and returns the new length
:reduce(): Reduce the values of an array to a single value (going left-to-right) {
  arr.reduce(callback[, initialValue])
 const reducer = (accumulator, currentValue) => accumulator + currentValue;
 console.log(array1.reduce(reducer));// expected output: 10
 console.log(array1.reduce(reducer, 5));// expected output: 15
}
:reduceRight(): Reduce the values of an array to a single value (going right-to-left)
:reverse(): Reverses the order of the elements in an array
:shift(): Removes the first element of an array, and returns that element. a.unshift(item1[, item2[, ...[, itemN]]])
:slice(): Selects a part of an array, and returns the new array. a.splice(start, delcount[, item1[, ...[, itemN]]])
:some(): Checks if any of the elements in an array pass a test
:sort(): Sorts the elements of an array. a.sort([cmpfn])
:splice(): Adds/Removes elements from an array
:toString(): Converts an array to a string, and returns the result
:unshift(): Adds new elements to the beginning of an array, and returns the new length
:valueOf(): Returns the primitive value of an array:
  

!mutable and non-mutable functions
:

!DOM
:Document Object Model.When a web page is loaded, the browser creates a Document Object Model (DOM) of the page
:The window object represents an open window in a browser. It is browser’s object (not JavaScript’s) & is automatically created by browser.It is a global object with lots of properties & methods. alert, prompt, console.log are all window object functions only.
:hum apna pura ka pura HTML code ko javascript me use kr sakte hai. hamara HTML code ke har tag document naam ke object ke roop me window object me save ho jata hai, aur fir using this document object we can handle all our HTML tags and Code. DOM is a tree jaha har ek tag ek node ko represent karta hai. we follow a hierarchy. window->document->HTML->head & body

:DOM Manipulation
+document.getElementById(“myId”)
+document.getElementsByClassName(“myClass”)//return HTML collection(just like array) containing all the tags with this classname.
+document.getElementsByTagName(“p”)
+document.querySelector(“#myId / .myClass / tag”) //returns first element
+document.querySelectorAll(“#myId / .myClass / tag”)//returns a NodeList containing all the classes with the given name or al the tags with the given tag

:properties
+tagName : returns tag for element nodes
+innerText : returns the text content(in form of string) of the element and all its children node too
+innerHTML : returns the plain text or HTML contents in the element(along with the tags)
+textContent : returns textual content even for hidden elements
+getAttribute( attr ) //to get the attribute value
+setAttribute( attr, value ) //to set the attribute value
eg:: <p id="abc"></p>
var para=document.querySelector("p");
para.setAttribute(id,125)

+node.style : to change the CSS of any node

Insert/Delete Elements
let el = document.createElement(“div“)
+node.append( el ) //adds at the end of node (inside)
+node.prepend( el ) //adds at the start of node (inside)
+node.before( el ) //adds before the node (outside)
+node.after( el ) //adds after the node (outside)
+node.remove( ) //removes the node

*Strings are immutable in js.
*console.log is use to print, it will print in form of code and console.dir is use to print special objects like document, it will print in form of object. 









*/