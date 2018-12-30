'use strict';

//JSX

console.log("App.js is running");

var app = {
    title: 'The Indecision App',
    subtitle: 'A basic react app'
    //JSX - JavaScript XML (JS Syntax Extenstion)
};var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        { id: 'apptitle' },
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    )
);

var user = {
    name: 'Bill',
    age: 25,
    location: 'Canada'
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name.toUpperCase() + "!"
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);
var appRoot = document.getElementById("app");

//Takes 2 arguments 
//(1)-JSX what you want to render 
//(2) DOM element - where you want to render it
ReactDOM.render(template, appRoot);

//running in server to watch for changes 
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
