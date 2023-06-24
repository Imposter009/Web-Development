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


// class  based component

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

  //creating a constructor,constructor will be called when the component(newsId) gets initiated.it is important to write super()
  constructor() {
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
>>in class based component we will use `this` operator with every variable or state or function. eg= this.state.title, onClick={this.funName}
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
*/

// class  based component


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

----------------------------------------------------------------------------------------------------------------------------------------------------------------

>>ReactJS is a JavaScript library used to build User Interfaces(UI). It significantly decreases the code with it's components, states i.e. hooks, etc.
>>React.js library has two components:
1.Class components
2.Functional Components

>>react is 1) composable:mtlb har component ko alag alag likhte hai. 2) declarative: mtlb hum sirf batate hai ki kya karna hai.
>>react is use to make single page application. isse banaye gaye page reload nhi hote. usme bs kuch components change ho jate hai baaki as it is rehta hai mtlb baar baar repeat hone wali cheeze server se nhi aati. 

>>ek page se dusre page pr jaane ke liye anchor(<a>) use nhi karenge uski jagha router,switch, link use karenge.

>>{{}} outer bracket js ke liye aur inner object ke liye. eg: <h1 style={{margin:'10px';}} > <h1/>

=>What is a State?
state is plain JavaScript objects. state is managed within the component (similar to variables declared within a function).
>Like normal variables, state can hold any datatype like strings, numbers, booleans, arrays, objects, objects in arrays, arrays in objects
eg::
    const [data, setData] = useState({
        name: 'Lovish',
        age: 21
    })
    >>here data is initial state and setData will be new state.useState wale bracket me jo likjte hai wo initial value hoti hai.
>>useState ko hum log funtion ke start me hi likhenge aur kisi block ke andar nhi warna error dikhayega.


=>What is a Hook?
Hooks let you use state and other React features without writing a class
>useState is a Hook that lets you add React state to function components.
>you need to keep in mind while using hooks:
:You must import it from react
:Hooks can only be called in React Function Components
:Hooks can only be called at the top level of a component, meaning it can't be called from inside a block, i.e. {}. So, can't be called inside if, loops etc.
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

>>`HIGHER ORDER COMPONENT` 
a higher-order component is a function that takes a component and returns a new component.::
const EnhancedComponent = higherOrderComponent(WrappedComponent);

>>`PURE COMPONENT` 
React pure components are the components that do not re-render when the value of props and state has been updated with the same values. Since these components do not cause re-rendering when the same values are passed thus they improve performance

>>` REACT LIFE CYCLE`  
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

3.The render() method is required, and is the method that actually outputs the HTML to the DOM.

4.The componentDidMount() method is called after the component is rendered.
This is where you run statements that requires that the component is already placed in the DOM.

#:UPDATING A component is updated whenever there is a change in the component's state or props.
React has five built-in methods that gets called, in this order, when a component is updated:

1 getDerivedStateFromProps() This is the first method that is called when a component gets updated.
2 shouldComponentUpdate() this method you can return a Boolean value(default true) that specifies whether React should continue with the rendering or not.
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


>>`PROPS `
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

>>`PROPS VS STATE`
:Props are used to pass data and event handlers to its children components
:Props are immutable - Once set, props cannot be changed
:Props can be used in both functional and class components
:Props are set by the parent component for the children components

:State is used to store the data of the components that has to be rendered to the view
:State holds the data and can change over time
:State can only be used in class components
:State is generally updated by event handlers
:State is initialized in the constructor

>>` EVENTS `
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
