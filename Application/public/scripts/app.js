console.log("App.js is running")


//JSX - JavaScript XML (JS Syntax Extenstion)
var template = <p>This is JSX from app.js</p>; //Static
var appRoot = document.getElementById("app")

//Takes 2 arguments 
//(1)-JSX what you want to render 
//(2) DOM element - where you want to render it
ReactDOM.render(template, appRoot)