l// function based component 
import React, { useState } from 'react'

export default function Notes() {
  /* how to apply black theme  */
  const [Theme, setTheme] = useState({
    color: 'black',
    backgroundColor: 'white'
  })

  const [btn, setbtn] = useState(
    "Change to Dark Mode"
  )

  const toggleStyle = () => {
    if (Theme.backgroundColour === 'white') {
      setTheme({
        color: 'white',
        backgroundColor: 'black'
      })
      setbtn(
        "Change to Light Mode"
      )
    }
    else {
      setTheme({
        color: 'black',
        backgroundColour: 'white'
      })
      setbtn(
        "Change to Dark Mode"
      )
    }

  }
  // how to call a component correctly is this: reactDom.render(<CompName />,location) not this: reactDom.render(CompName (),location)





  /* how to apply black theme*/
  return (
    <>
      <div style={Theme}>
        <h1 >HELLO WORLD</h1>
        <button onClick={toggleStyle}>{btn}</button>
      </div>
    </>
  )
}
// function based component


// ?class  based component

/*
// news.js
{
  export class news extends Component {
    render() {
      return {
        < newsid />
      }
  }
}

// newsid.js
{
  export class newsid extends Component {
    render() {
      return {
        <div className=" "></div>
      }  
  }
}
*/

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// creating a class. name will be same as files name and it will extend component
export class Notes extends Component {

  //componentDidMount(){} is always called after render
  componentDidMount() { let url = "url of the API which we will be using" }

  //creating a constructor,constructor will be called when the component(newsId)/object gets initiated.it is important to write super()
  constructor() {
    //The super() method refers to the parent class.By calling the super() method in the constructor method, we call the parent's constructor method and get access to the parent's properties and methods.
    super();

    // component properties should be kept in an object called state. it is  a use state
    this.state = { title: "code", example: this.article };
  }
  //React renders HTML to the web page by using a function called render().The purpose of the function is to display the specified HTML code inside the specified HTML element.In the render() method, we can read props and state and return our JSX code to the root component of our app.
  render() {
    // taking props
    let { title, description } = this.props;
    // changing state of title
    this.setState({ title: new_name })
    return
    (
      //creating router to switch between different components
      <Router >
        <Switch>
          {/* on clicking on about it will switch to About component.  */}
          <Route path="/about">
            <newsid key="0" />
          </Route>
          <Route path="/users">
            <newsid key="1" />
          </Route>
          <Route path="/">
            <newsid key="2" />
          </Route>
        </Switch>
      </Router>
    );
  }
}

/*

/ ?class  based component


/*
REACT ROUTER:
to install: yarn add react-router-dom

>>to switch beteen component on clicking we will use link tag. link is modified anchor tag. we will change <a> to <link> and `href` to `to` 
<link to="/home">home</link>

on clicking on the link option tjinh(i.e home here) it will get route to its path(i.r /home)
<route exact path="/home"><home/><route>

A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. 
>> we use `exact` to exactly match the path  with the location.pathname.
>> `key` if we want to call same component again and again with differnet props then we need to give them different key to differentiate them, so that they can get rendered

/*

---------------------------------------------------------
>>ReactJS is a JavaScript library used to build User Interfaces(UI). It significantly decreases the code with it's components, states i.e. hooks, etc.

>>react is 1) composable:mtlb har component ko alag alag likhte hai. 2) declarative: mtlb hum sirf batate hai ki kya karna hai.
>>react is use to make single page application. isse banaye gaye page reload nhi hote. usme bs kuch components change ho jate hai baaki as it is rehta hai mtlb baar baar repeat hone wali cheeze server se nhi aati. 

>>ek page se dusre page pr jaane ke liye anchor(<a>) use nhi karenge uski jagha router,switch, link use karenge.

>>{{}} outer bracket js ke liye aur inner object ke liye. eg: <h1 style={{margin:'10px';}} > <h1/>In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces {{}}.

>>Babel, allows us to write JSX syntax and ES6 in older browsers.

>>ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript,

>>jsx dont allow if statement intead of if we use ternary operator
As JSX is a combination of HTML and JavaScript it is not supported by Browsers. So, if any file contains a JSX file, the Babel transpiler converts the JSX into JavaScript objects which becomes valid JavaScript. Thus, browsers understand the code and execute it. Browsers can’t read JSX because there is no inherent implementation for the browser engines to read and understand them.

>>React.js library has two components:
1.Class components
2.Functional Components

*>>The .map(item,index) method allows you to run a function on each item in the array, returning a new array as the result.

>>Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.Keys need to be unique to each sibling. But they can be duplicated globally.

>>#FORMS
:eg::
function MyForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}
This will work as normal, the form will submit and the page will refresh.But this is generally not what we want to happen in React.We want to prevent this default behavior and let React control the form.




?Forms
:Handling forms is about how you handle the data when it changes value or gets submitted.In HTML, form data is usually handled by the DOM.In React, form data is usually handled by the components.When the data is handled by the components, all the data is stored in the component state.You can control changes by adding event handlers in the onChange attribute.We can use the useState Hook to keep track of each inputs value and provide a "single source of truth" for the entire application.
eg::
function MyForm() {
  const [name, setName] = useState("");

  return (
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  )
}

:You can control the submit action by adding an event handler in the onSubmit attribute for the <form>. 
eg::
function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}
a preventDefault is called on the event when submitting the form to prevent a browser reload/refresh.

:You can control the values of more than one input field by adding a name attribute to each element.We will initialize our state with an empty object.To access the fields in the event handler use the event.target.name and event.target.value syntax.To update the state, use square brackets [bracket notation] around the property name.

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}

:A drop down list, or a select box, in React is also a bit different from HTML.in HTML, the selected value in the drop down list was defined with the selected attribute. In React, the selected value is defined with a value attribute on the select tag:
function MyForm() {
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.value)
  }

  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  )
}

:Notice how onClick={handleClick} has no parentheses at the end! Do not call the event handler function: you only need to pass it down. React will call your event handler when the user clicks the button.

TODO >>#HOOKS

?=>What is a Hook?
Hooks let you use state and other React features without writing a class
>useState is a Hook that lets you add React state to function components.
> You can also write your own Hooks by combining the existing ones
>you need to keep in mind while using hooks:
:You must import it from react
:Hooks can only be called in React Function Components
:Hooks can only be called at the top level of a component (or other Hooks), meaning it can't be called from inside a block, i.e. {}. So, can't be called inside if, loops etc. If you want to use useState in a condition or a loop, extract a new component and put it there. 


eg::
<>
import React,{useState} from 'react'; 
const Blogs = () => {
    // Can call here
   const [name, setName] = useState('')  
   setName('Lovish')
    if (TRUE){
        // Can't call here
    }
    return <h1>My name is {name}</h1> 
};
export default Blogs;
</>
>useState takes initial state as argument and gives a state and a function(setName in this case) to update that state as we can't directly change/update a state. Also, these state names are just like variables, hence you can name them anything you like.
>it returns a state and a function to change/update that state. Hence, everything is stored in name


:using one use state in more than one component and passing it::
--app.js--
export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}
---button.js---
function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );}

?:>useState
:The React useState Hook allows us to track state  (data or properties) in a function component.The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!

:we can include an object or array to our useState
function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

:Updating Objects and Arrays in State
function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }
Because we need the current value of state, we pass a function into our setCar function. This function receives the previous value.We then return an object, spreading the previousState and overwriting only the color.

?:>#useEffect Hook
:he useEffect Hook allows you to perform side effects in your components.Some examples of side effects are: fetching data, directly updating the DOM, and timers.useEffect accepts two arguments. The second argument is optional.::
useEffect(<function>, <dependency>)

:useEffect runs on every render. That means that when the data changes, a render happens, which then triggers another effect.This is not what we want. There are several ways to control when side effects run.We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.

1. No dependency passed:
useEffect(() => {
  //Runs on every render
});

2. An empty array:
useEffect(() => {
  //Runs only on the first render
}, []);

3. Props or state values:
useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);

eg::
function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
  Here is an example of a useEffect Hook that is dependent on a variable. If the count variable updates, the effect will run again:

:Some effects require cleanup to reduce memory leaks.Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.We do this by including a return function at the end of the useEffect Hook
eg::
const [count, setCount] = useState(0);
useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);
  return () => clearTimeout(timer)
  }, []);

?:>#useContext Hook
:React Context is a way to manage state globally.It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone

:things we use to do earlier when we were not using useContext. i.e using useState only::
1.State should be held by the highest parent component in the stack that requires access to the state.
2 we will need to pass the state as "props" through each nested component. This is called "prop drilling".
eg::
function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </>
  );
}

function Component2({ user }) {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 user={user} />
    </>
  );
}

function Component3({ user }) {
  return (
    <>
      <h1>Component 3</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

:now using useContext::
1.create context, you must Import createContext and initialize it:
2.we'll Wrap child components in the Context Provider and supply the state value.
3.In order to use the Context in a child component, we need to access it using the useContext Hook.First, include the useContext in the import statement then use it
eg::
import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();
//initializing it above the parent functions. we gave it UserContext name
function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);
//we are using the state here thats why using useContext here
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

?:>useRef Hook
:The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.
:useRef() only returns one item. It returns an Object called current. When we initialize useRef we set the initial value: useRef(0).


eg::
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

*:Accessing DOM Elements
In general, we want to let React handle all DOM manipulation.But there are some instances where useRef can be used without causing issues.In React, we can add a ref attribute to an element to access it directly in the DOM.

eg::
import { useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}
:The JavaScript focus() method is used to give focus to an HTML element. It sets the element as the active element in the current document. It can be applied to one HTML element at a single time in a current document. The element can either be a button or a text field or a window etc. It is supported by all browsers.Focus mtlb ki wo html element highlight ho jayega bs The focus field can be removed with the help of the blur() method in javascript.

*:Tracking State Changes
The useRef Hook can also be used to keep track of previous state values.This is because we are able to persist useRef values between renders.

Eg::
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}


?:>useReducer Hook
:The useReducer Hook is similar to the useState Hook.It allows for custom state logic.If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.
:The useReducer Hook accepts two arguments.::
useReducer(<reducer>, <initialState>)
:The reducer function contains your custom state logic and the initialStatecan be a simple value but generally will contain an object.The useReducer Hook returns the current stateand a dispatchmethod.



?:>useCallback Hook
The React useCallback Hook returns a memoized callback function.Think of memoization as caching a value so that it does not need to be recalculated.This allows us to isolate resource intensive functions so that they will not automatically run on every render.The useCallback Hook only runs when one of its dependencies update.


!:>>#CLASS COMPONENT

:The class component has to include the extends React.Component statement, this statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.The component also requires a render() method, this method returns HTML.in class based component we will use `this` operator with every variable or state or function. eg= this.state.title, onClick={this.funName}

:If there is a constructor() function in your component, this function will be called when the component gets initiated.The constructor function is where you initiate the component's properties.In React, component properties should be kept in an object called state.The constructor function is also where you honor the inheritance of the parent component by including the super() statement, which executes the parent component's constructor function, and your component has access to all the functions of the parent component (React.Component).super(props) before anything else, this will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component).

:The state object is where you store property values that belongs to the component.When the state object changes, the component re-renders.To change a value in the state object, use the this.setState() method.

?Props
:Another way of handling component properties is by using props. Props are like function arguments, and you send them into the component as attributes.If your component has a constructor function, the props should always be passed to the constructor and also to the React.Component via the super() method. 
eg::
class Car extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2>I am a {this.props.model}!</h2>;
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car model="Mustang"/>);

>>in class we use this.props and we define it in class component as defaultProps and propTypes. defaultProps is use to give default value to our props and propTypes are use to tell which kind of prop wil come.
eg <newsId author="sumit" number=8/>
class newsID()
{
  static defaultProps={
    author:' unknown',
    number: 10
  }
  static propTypes={
    author: PropTypes.string,
    number: PropType.number
  }
  this.state={title = "code "}
}
render (){
  return {
           console.log(${this.prop.author});
  }
}

>>Create an object called "mycar" based on the Car class::
class Car {
  constructor(name) {
    this.brand = name;
  }
}
const mycar = new Car("Ford");

?=>What is a State?
state is plain JavaScript objects. state is managed within the component (similar to variables declared within a function).
>Like normal variables, state can hold any datatype like strings, numbers, booleans, arrays, objects, objects in arrays, arrays in objects
eg::
    const [data, setData] = useState({
        name: 'Lovish',
        age: 21
    })
    >>here data is initial state and setData will be new state.useState wale bracket me jo likjte hai wo initial value hoti hai.
>>useState ko hum log funtion ke start me hi likhenge aur kisi block ke andar nhi warna error dikhayega.

?>>#ROUTER
eg::
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

We wrap our content first with <BrowserRouter>.Then we define our <Routes>. An application can have multiple <Routes>. Our basic example only uses one.<Route>s can be nested. The first <Route> has a path of / and renders the Layout component.The nested <Route>s inherit and add to the parent route. So the blogs path is combined with the parent and becomes /blogs.The Home component route does not have a path but has an index attribute. That specifies this route as the default route for the parent route, which is /.Setting the path to * will act as a catch-all for any undefined URLs. This is great for a 404 error page.

:An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.
eg::
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      // This element will render either <DashboardMessages> when the URL is "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route
          path="messages"
          element={<DashboardMessages />}
        />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>
    </Routes>
  );
}
in our previous eg layout is our parent component

?>>#MEMO
:Using memo will cause React to skip rendering a component if its props have not changed.
eg:: export default memo(component_name);

---index.js:---

import { useState } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";
const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

---Todos.js:---

import { memo } from "react";
const Todos = ({ todos }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};
export default memo(Todos);

?>>`#HIGHER ORDER COMPONENT` 
a higher-order component is a function that takes a component and returns a new component.::
const EnhancedComponent = higherOrderComponent(WrappedComponent);



>>`#PURE COMPONENT` 
React pure components are the components that do not re-render when the value of props and state has been updated with the same values. Since these components do not cause re-rendering when the same values are passed thus they improve performance

>>` #REACT LIFE CYCLE`  
each component in React has a lifecycle which you can monitor and manipulate during its three main phases.The three phases are: Mounting, Updating, and Unmounting.

#:Mounting means putting elements into the DOM.
React has four built-in methods that gets called, in this order, when mounting a component:
1.constructor()
2.getDerivedStateFromProps()
3.render()
4.componentDidMount()

The render() method is required and will always be called, the others are optional and will be called if you define them.

1.The constructor() method is called with the props, as arguments, and you should always start by calling the super(props) before anything else, this will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component).
eg::class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));

2.The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM.This is the natural place to set the state object based on the initial props.It takes state as an argument, and returns an object with changes to the state.
eg::
constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
  render(){}

3.The render() method is required, and is the method that actually outputs the HTML to the DOM.

4.The componentDidMount() method is called after the component is rendered.
This is where you run statements that requires that the component is already placed in the DOM.

#:UPDATING A component is updated whenever there is a change in the component's state or props.
React has five built-in methods that gets called, in this order, when a component is updated:

1 getDerivedStateFromProps() This is the first method that is called when a component gets updated.This is still the natural place to set the state object based on the initial props.
2 shouldComponentUpdate() this method you can return a Boolean value(default true) that specifies whether React should continue with the re-rendering or not.
3 render()
4 getSnapshotBeforeUpdate() In the getSnapshotBeforeUpdate() method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.
If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.
5 componentDidUpdate() The componentDidUpdate method is called after the component is updated in the DOM.


#:UNMOUNTING The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.
React has only one built-in method that gets called when a component is unmounted:

1.componentWillUnmount(),The componentWillUnmount method is called when the component is about to be removed from the DOM.eg::

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: true};
  }
  delHeader = () => {
    this.setState({show: false});
  }
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    };
    return (
      <div>
      {myheader}
      <button type="button" onClick={this.delHeader}>Delete Header</button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('root'));


?>>`PROPS `
Props(properties) are arguments passed into React components

for function::

function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" />
    </>
  );
}

for class::

class Car extends component{
  render(){
  return <h2>I am a { this.props.brand }! {this.prop.children}</h2>;
}
}

class garage extend component {
  render(){
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford"><h1>hello</h1></Car>
    </h1>
  );
  }

**in class we use `this` and in function we dont use it.
:to send a variable as prop we use curly bracket.
eg :: 
const obj={name: "sam", age: "21"}..<car detail={obj}/>

TODO >>`PROPS VS STATE`
:Props are used to pass data and event handlers to its children components
:Props are immutable - Once set, props cannot be changed
:Props can be used in both functional and class components
:Props are set by the parent component for the children components

:State is used to store the data of the components that has to be rendered to the view
:State holds the data and can change over time
:State can only be used in class components
:State is generally updated by event handlers
:State is initialized in the constructor

TODO >>` #EVENTS `
:React events are written in camelCase syntax:  onClick instead of onclick.
:React event handlers are written inside curly braces:  onClick={shoot}  instead of onClick="shoot()".

:To pass an argument to an event handler, use an arrow function.Example:
function Football() {
  const shoot = (a) => {
    alert(a);
  }

  return (
    <button onClick={() => shoot("Goal!")}>Take the shot!</button>
  );
}

:Event handlers have access to the React event that triggered the function.Example:
function Football() {
  const shoot = (a, b) => {
    alert(b.type);
    
    // 'b' represents the React event that triggered the function,in this case the 'click' event
  }
  return (
    <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
  );
}



*/

/*
                                                               !Questions

Ques:what is prop drilling ? 
when we pass the state as "props" through each nested component, it is is called prop drilling.

Ques: diff bw useMemo and useCallback
The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.
*/