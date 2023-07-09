
/* 
ReactDOM.render(content,location) is now ReactDom.createRoot(location where we wanna paste).render(content)
import ReactDom from"react-dom" is now import ReactDOM from "react-dom/client"
*/
import ReactDOM from "react-dom/client"
// ReactDOM.render(navbar, document.getElementById("root")) old method
// ReactDOM.createRoot(document.getElementById("root")).render(navbar) new method
// can also be written as:
{
    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(navbar)
}

/*
In order to take advantage of React 18's concurrent features you'll need to use the new root API for client rendering.
// Before
import ReactDOM from 'react-dom';
ReactDOM.render(<App />, document.getElementById('root'));

// After
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
*/