'use strict';

//JSX - JavaScript XML (JS Syntax Extenstion)
console.log("App.js is running");

//CONDITIONAL RENDERING
//if statements 
//ternary operators 
//logical and operator 
//---------------------------


//rendering object TEMPLATE
var app = {
    title: 'The Indecision App',
    subtitle: 'A basic react app'
};

var template = React.createElement(
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

//TemplateTwo
var user = {
    name: 'Bill',
    age: 40,
    location: 'Canada',
    options: ['One', 'Two']

    //conditional rendering function
};function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

//renders age if above 18 for user.age
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location),
    React.createElement(
        'p',
        null,
        user.options.length > 0 ? 'The options' : 'No options available'
    )
);
var appRoot = document.getElementById("app");

//Takes 2 arguments 
//(1)-JSX what you want to render 
//(2) DOM element - where you want to render it
ReactDOM.render(templateTwo, appRoot);

//running in server to watch for changes 
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
