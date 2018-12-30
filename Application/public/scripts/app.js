"use strict";

//JSX

console.log("App.js is running");

//JSX - JavaScript XML (JS Syntax Extenstion)
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        { id: "apptitle" },
        "Indecision App"
    ),
    React.createElement(
        "p",
        null,
        "Information about the app"
    )
);

var userName = "Bill";
var userAge = 25;
var userLocation = "USA";

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        userName.toUpperCase() + "!"
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        userAge
    ),
    React.createElement(
        "p",
        null,
        "Location: ",
        userLocation
    )
);
var appRoot = document.getElementById("app");

//Takes 2 arguments 
//(1)-JSX what you want to render 
//(2) DOM element - where you want to render it
ReactDOM.render(templateTwo, appRoot);

//running in server to watch for changes 
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
