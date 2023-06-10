
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

*/