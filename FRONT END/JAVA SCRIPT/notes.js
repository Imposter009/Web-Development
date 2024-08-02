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
:Document Object Model:: When a web page is loaded, the browser creates a Document Object Model (DOM) of the page
:document object represent the root node of the HTML document. the section below the navigation section(URL tab) that comes in document obj, document obj is a part of window obj 
:Window object Model::The window object represents an open window in a browser. It is browser’s object (not JavaScript’s) & is automatically created by browser.It is a global object with lots of properties & methods. alert, prompt, console.log are all window object functions only. window obj mtlb current tab/window. we use tis to access window specific properties.
{
  +window.innerHeight - the inner height of the browser window (in pixels)
  +window.innerWidth - the inner width of the browser window (in pixels)
  *The innerWidth and innerHeight properties return the size of the page viewport inside the browser window (not including the borders and toolbars).
  +The outerWidth and outerHeight properties return the size of the browser window itself.::window.outerHeight,::window.outerWidth
  +The open() method opens a new browser window, or a new tab, depending on your browser settings and the parameter values.:: window.open(URL, name , features). feature mtlb height,width and all
  +The close() method closes the current window.::window_reference,close()
  
  !window.location
  The window.location object can be used to get the current page address (URL) and to redirect the browser to a new page.
  +window.location.href returns the href (URL) of the current page
  +window.location.hostname returns the domain name of the web host
  +window.location.pathname returns the path and filename of the current page
  +window.location.protocol returns the web protocol used (http: or https:)
  +window.location.assign(URL) loads a new documentThe assign() method accepts an URL, navigate to the URL immediately, and make an entry in the browser’s history stack.
  +window.location.replace(URL) method is similar to the assign() method except it doesn’t create a new entry in the browser’s history stack. Therefore, you cannot click the back button to go to the previous page.
  
  !window.navigator
  :The Navigator object has properties that convey the browser’s information.
  +navigator.platform
  +navigator.cookiesEnabled
}

All global JavaScript objects, functions, and variables with the var keyword automatically become members of the window object.

:hum apna pura ka pura HTML code ko javascript me use kr sakte hai. hamara HTML code ke har tag document naam ke object ke roop me window object me save ho jata hai, aur fir using this document object we can handle all our HTML tags and Code. DOM is a tree jaha har ek tag ek node ko represent karta hai. we follow a hierarchy. window->document->HTML->head & body


?DOM Manipulation
+document.getElementById(“myId”)
+document.getElementsByClassName(“myClass”)//return HTML collection(just like array) containing all the tags with this classname.
+document.getElementsByTagName(“p”)
+document.querySelector(“#myId / .myClass / tag”) //returns first element
+document.querySelectorAll(“#myId / .myClass / tag”)//returns a NodeList containing all the classes with the given name or all the tags with the given tag
+document.createTextNode("text value")// we use it if we want to put any text inside a newly created node.


?properties
+tagName : returns tag for element nodes
+innerText : returns the text content(in form of string) of the element and all its children node too
+innerHTML : returns the plain text or HTML contents in the element(along with the tags)
+textContent : returns textual content even for hidden elements. elm.textContent="value"
+getAttribute( attr ) //to get the particular attribute value of a particular element 
+setAttribute( attr, value ) //to set the attribute value
eg:: <p id="abc"></p>
var para=document.querySelector("p");
para.setAttribute("id","125")
para.removeAttribute("id")
para.hasAttribute("id")

?Traversing in node
+node.parentElement: will give the parent node of the current node
+node.children: will give all the children nodes  of the current nodenode.children[1]:2nd child node of node
+node.firstElementChild: will give the first child node of the current node
+node.lastElementChild: will give the last child node of the current node
+node.previousElementSibling: will give the previous sibling node of the current node
+node.nextElementSibling: will give the previous sibling node of the current node


+node.style.cssText="background-color: red; color:red; " : to change the CSS of any node. it will over-write the existing CSS property of that node. .cssText actually returns the current CSS so either we can overwrite it or we can add to it by using:: node.style.cssText +="border:red; "
+node.style.background="red" : to change the particular CSS of any node. it will add to the existing CSS
+getComputedStyle(node): will give us all the style attached with this particular node
+node.className="value "
+node.id="value "
+node.classList():classList property returns the class name(s) of an element, as a DOMTokenList object.to add a new class we can use add method: node.classList.add("new_classname").to remove a class we can use add method:  node.classList.remove("classname"). to replace a new class we can use add method:  node.classList.replace("calss_to_be_replace","new_classname"). node.classList.contains("classname") will return true or false if it contains this class or not. node.classList.toggle("classname"):if present then remove if not then add.


?Insert/Delete Elements
let el = document.createElement(“div“) //will create a div tag
+parent_node.append( el ) //adds at the end of node (inside). can add node as well as string.
+parent_node.appendChild(el)//adds at the end of node (inside). can add node only not string.
+parent_node.insertBefore(el_to_be_inseted, pos_of_el_jiske_pahle_insert_karna_hai): will insert inside the parent node but at a pos before the given pos
+parent_node.insertAfter(el_to_be_inseted, pos_of_el_jiske_baad_insert_karna_hai): will insert ele inside the parent node but at a pos after the given pos
+parent_node.removeChild(which child we wanna remove ) //removes the Child node.

+node.cloneNode():: let clone=node_to_be_cloned.cloneNode(true)
+parent_node.replaceChild(item, replace): to replace an child element (replace) with a new element (item)
+node.insertAdjacentHTML():this method of the Element interface parses the specified text as HTML.
node.insertAdjacentHTML('position', "text") eg:node.insertAdjacentHTML('beforeend', "<h2>new heading</h2>")
{
position::
'beforebegin': Before the selected element itself.
'afterbegin': Just inside the selected  element, before its first child.
'beforeend': Just inside the selected  element, after its last child.
'afterend': After the selected  element itself.
eg::
<--beforebegin-->
 <div id='txt'> <--selected-->
 <--afterbegin-->
 <h1>hello</h1>
 <--beforeend-->
 </div>
 <--afterend-->
}
+node.prepend( el ) //adds at the start of node (inside)
+node.before( el ) //adds before the node (outside)
+node.after( el ) //adds after the node (outside)
+node.remove( ) //removes the node

*Strings are immutable in js.
*console.log is use to print, it will print in form of code and console.dir is use to print special objects like document, it will print in form of object. 

!Events
:The change in the state of an object is known as an Event.Events are fired to notify code of "interesting changes" that may affect code execution.
:Ways to handle event :
+inline event handling
+using node.event().
+eventListner

:Event Object:: It is a special object that has details about the event.All event handlers have access to the Event Object's properties and methods. node.event=(e)=>{e.type;e.target;}

?node.event()::
 let bt=document.querrySelector(#btn); 
 bt.onclick=()={
  //task
 } 
 *prioirty of event handling: inline<node.event. iska mtlb hai ki agar koi event ke liye hamare code me inline handling hui hai aur js file me usi node ke liye event handle kiya hai to hamra js wala node.event hi work karega, inline wala nhi chalega
 *if we write more than one handler for same node for same event then only the handler in the last will work(that means it will overwrite all the previous handlers) 

?eventListner::
: node.addEventListner(event,callback)
 let bt=document.querrySelector(#btn); 
 bt.addEventListner(onClick,()=>{
 //  task
 });
 *if we use eventListner tab we can use different handlers for the same node and same event and all these handlers will execute.
: node.removeEventListner('event',callback)
 *Note : the callback reference in removeEventListner should be same to remove. isliye we store this callback in a variable and use this variable

:DOMContentLoaded: the browser fully loaded HTML and completed building the DOM tree. However, it hasn’t loaded external resources like stylesheets and images. In this event, you can start selecting DOM nodes or initialize the interface.::window.addEventListner("DOMContentLoaded",callback)

:load – the browser fully loaded the HTML and also external resources like images and stylesheets.we can apply load event on the whole window as well as on any particular element :: window.addEventListner("load",callback). :: node.addEventListner("load",callback)

:keydown/keyup/keypress:: The keydown and keyup events provide a code indicating which key is pressed, while keypress indicates which character was entered. For example, a lowercase "a" will be reported as 65 by keydown and keyup, but as 97 by keypress. An uppercase "A" is reported as 65 by all events.window.addEventListner("keydown",function(e){console.log(e.key)})

:scroll:: The scroll event fires when the document view has been scrolled.It considers both scroll up and scroll down as same.::  window.addEventListner("scroll", function(){}).
:wheel:: window.addEventListner("wheel", function(e){}). deltaX and deltaY are methods of the wheel object(e). deltaX::The horizontal (x-axis) scroll amount of the wheel. deltaY::	The vertical (y-axis) scroll amount of the wheel. if(deltaY<0) scroll up. if(deltaY>0)scroll down.
*NOTE: pageYOffset: will give how much pixels we are already scrolled down i.e return pixels.

:onfocus:: this event occurs when an element gets focus.:: node.addEventListner("focus", function())
:blur:: this event fires when an element has lost focus.:: node.addEventListner("blur", function())
:onchange:: this event occurs when an element gets entered by user gets changed.This event occurs when the value of an input or textarea element is changed. :: node.addEventListner("change", function())
:oninput:: this event occurs when an element gets user input.:: node.addEventListner("input", function())

*Event bubbling::In the event bubbling model, an event starts at the most specific element and then flows upward toward the least specific element (the document or even window). by default it is true. 
{
When you click the button, the click event occurs in the following order:
button
div with the id container
body
html
document
}

*Event capturing::In the event capturing model, an event starts at the least specific element and flows downward toward the most specific element.to turn event capturing on:: addEventListner("click", fn(){},true) here it means he set useCapture as true.
{
When you click the button, the click event occurs in the following order:
document
html
body
div with the id container
button
}

*event.stopPropagation:: agar hum chahte hai ki bs agar btn click hua hai to bubbling or capturing na ho to we use this. callback function me event pass hoga and us event ka ye method hai. btn.addEventListner("click", function(event){event.stopPropagation;}) 



!Time out & time interval
:setTimeout(function, milliseconds)::Executes a function, after waiting a specified number of milliseconds.
:setInterval(function, milliseconds)::Same as setTimeout(), but repeats the execution of the function continuously.
:clearTimeout(timeout_id):: will end the timeout even if the time is not completed. let timeout_id= setTimeout(function(), 1000); clearTimeout(timeout_id);
:clearInterval(timeout_id):: will end the timeout even if the time is not completed.




!Prototypes

!Object & Classes in JS
:Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.
:a class has::
 +constructor: in JS we use the keyword constructor instead of writing the name of the class
 +methods
 +Static Properties i.e methods and variables(can only be used by class name and not by object).we cannot call a non static method from a static method in JavaScript.
 +private field: A private field is an identifier prefixed with #.Accessing private fields outside the class is an early syntax error. private field with same name can't be declared twice in a single class, and they can't be deleted.
:we alwasys use this keyword inside the class to use a variable or if we want to use another method inside a method.  
{
  //1) Declaration
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

//2) Expression; the class is anonymous but assigned to a variable
const Rectangle = class {
  constructor() {
  }
};

//3) Expression; the class has its own name
const Rectangle = class Rectangle2 {
  constructor() {
  }
};
}
:Within a class constructor, the value of this points to the newly created instance. You can assign properties to it, or read existing propertiesThe this value will be automatically returned as the result of new
:We can use getter and setter methods to get the value of an object and set the value of an object. We can use the get keyword for the getter method and the set keyword for the setter methods. we use these functions as variables i.e without paranthesis
{
  class OOPs {
	constructor(name) {
		this.name = name;
	}

	// Getter method
	get langName() {
		return this.name;
	}

	// Setter method
	set langName(x) {
		this.name = x;
	}
	hello(){
		console.log(`Hello ${this.name}`)
	}
}

let obj = new OOPs('JavaScript');
console.log(obj.name); 

obj.langName = 'Java';
console.log(obj.langName);

}

:A javaScript object is an entity having state and behavior (properties and method).
:JS objects have a special property called prototype.prototype itself is an object. we use this prototype property of object to inherit methods and properties of other objects,i.e ther are reference to an object.We can set prototype using _ _ proto _ _
eg:
const employee={
  calcTax(){
    console.log("tax=10%")
  }
}
const sam={
  name="sam"
}
sam.__proto__=employee
**If object & prototype have same method, object’s method will be used

!Callback<<promises<<Async-Await
:Synchronous means the code runs in a particular sequence of instructions given in the program.Each instruction waits for the previous instruction to complete its execution.jabtak purana wala statement execute nhi ho jata tabtak wait karo.
:sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI.Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.agar purana wala statement zyda time le raha hai to uske parallel  me aage ke statement chala do. setTimeout is an async fn.

:A callback is a function passed as an argument to another function.
:Callback Hell : Nested callbacks stacked below one another forming a pyramid structure.(Pyramid of Doom)
eg::
{
  function getData(dataID, callBack) {
    setTimeout(() => {
        console.log(dataID);

        if (callBack) {
            callBack();
        }
    }, 2000);
}
getData(1, () => {
    getData(2, () => { getData(3, () => { getData(4) }) });
})
}

?Promises:
Promise is for “eventual” completion of task. It is an object in JS.It is a solution to callback hell.
let promise = new Promise( (resolve, reject) => { .... } ). reject and resolve are two handlers.*resolve & reject are callbacks provided by JS.
:A JavaScript Promise object can be:
+Pending : the result is undefined
+Resolved : the result is a value (fulfilled)  resolve( result )
+Rejected : the result is an error object      reject( error )
eg:
{
function getData(dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(dataID);
            resolve("success");
        }, 2000);
    })
}
getData(1);
}
:how to use a promise::we use  .then( ) & .catch( )
+when we want to do anything on success of a promise we use .then( ( res ) => { .... } ). inside the arrow fn we do our tasks. res me wo msg ayega jo resolve ke through pass hua hai
+when we want to do anything on failure of a promise we use .catch( ( err ) ) => { .... } ) err me wo msg ayega jo reject ke through pass hua hai

:>promise chaining:: using one .then just after another .then, mtlb agar hame kabhi koi aisa kaam karna hai jisme humko ek async fun ke end hone ke baad hi dusra async fn run karna hai tab we use this promise chaining. first .then me we will call the second async fn and we will return it kyuki we know ki it will give us a promise in return so we will use another .then on this promise and so on...
eg:
{
  function getData(dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(dataID);
            resolve("success");

        }, 2000);
    })
}
getData(1).then(()=>{
    return  getData(2)
    }).then(()=>{
        console.log("success")
    })
}


?Async-Await
:async function always returns a promise.
async function myFunc( ) { .... }
:await pauses the execution of its surrounding async function until the promise is settled.we can use await only in async fn
eg
{
  function getData(dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(dataID);
            resolve("success");

        }, 2000);
    })

  async function dataGet(){
    await getData(1);
    console.log("success")
    await getData(2);
    console.log("success")
    await getData(3);
    console.log("success")
}
dataGet();
}

!IIFE : 
:IIFE:: Immediately Invoked Function Expression. IIFE is a function that is called immediately as soon as it is defined.No need to call it
syntax:
{
  1:: (function (){//code})();
  2:: (()=>{//code})();
  3:: (async ()=>{//code})();
}

!Closures:

!this in JS
?Normal function
?Arrow function

!notes:
:>The Element.classList is a read-only property that returns a live DOMTokenList collection of the class attributes of the element. This can then be used to manipulate the class list.Although the classList property itself is read-only, you can modify its associated DOMTokenList using the add(), remove(), replace(), and toggle() methods.
eg::const div = document.createElement("div"); div.classList.remove("foo"); div.classList.add("anotherclass");

:>integers are treated as string in arrays therefore whenever we do array.sort() it will sort the numbers like strings i.e character by character.
{
  const a=[1,2,1000,3];
  console.log(a.sort());
  //o/p:: [ 1, 1000, 2, 3 ]
}

:> on doing a.indexOf() in an array for a element that is not present, it will return -1
:>we never pass callback with paranthesis else it will show error eg:: function s2(sum())
:> if we want to send a callback fn with an argument then we can use an arrow function and in that arrow fn we can send our callback fn with the argument. eg::getData(1,()=>{getData(2);})
:>fetch() and .json return a promise thats why we use await with them.
*/