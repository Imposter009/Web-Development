// function based component 
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


// creating a class. name will be same as files name and it will extend component
export class Notes extends Component {

  //componentDidMount(){} is always called after render
  componentDidMount() { let url = "url of the API which we will be using" }

  article = [eg1, eg2]

  //creating a constructor,constructor will be called when the component(newsId) gets initiated.it is important to write super()
  constructor() {
    super();

    // component properties should be kept in an object called state
    this.state = { title: "code", example: this.article };
  }
  //React renders HTML to the web page by using a function called render().The purpose of the function is to display the specified HTML code inside the specified HTML element.In the render() method, we can read props and state and return our JSX code to the root component of our app.
  render() {
    // taking props
    let { title, description } = this.props;
    return {
    }
  }
}
// class  based component


















/*
>>ReactJS is a JavaScript library used to build User Interfaces(UI). It significantly decreases the code with it's components, states i.e. hooks, etc.
>>React.js library has two components:
1.Class components
2.Functional Components 
>>react is use to make single page application. isse banaye gaye page reload nhi hote. usme bs kuch components change ho jate hai baaki as it is rehta hai mtlb baar baar repeat hone wali cheeze server se nhi aati. 
>>ek page se dusre page pr jaane ke liye anchor(<a>) use nhi karenge uski jagha router,switch, link use karenge.



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
*/
