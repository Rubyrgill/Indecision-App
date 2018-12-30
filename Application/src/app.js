//JSX

console.log("App.js is running")

var app = {
    title: 'The Indecision App',
    subtitle: 'A basic react app',
}
//JSX - JavaScript XML (JS Syntax Extenstion)
var template = (
    <div>
        <h1 id="apptitle">{app.title}</h1>
        <p>{app.subtitle}</p>
    </div>
);

var user = {
    name: 'Bill',
    age: 25,
    location: 'Canada'
}

var templateTwo = (
    <div>
        <h1>{user.name.toUpperCase() + "!"}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);
var appRoot = document.getElementById("app")

//Takes 2 arguments 
//(1)-JSX what you want to render 
//(2) DOM element - where you want to render it
ReactDOM.render(template, appRoot)

//running in server to watch for changes 
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch