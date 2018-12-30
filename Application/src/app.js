//JSX

console.log("App.js is running")


//JSX - JavaScript XML (JS Syntax Extenstion)
var template = (
    <div>
        <h1 id="apptitle">Indecision App</h1>
        <p>Information about the app</p>
    </div>
);

var userName = "Bill";
var userAge = 25;
var userLocation = "USA";


var templateTwo = (
    <div>
        <h1>{userName.toUpperCase() + "!"}</h1>
        <p>Age: {userAge}</p>
        <p>Location: {userLocation}</p>
    </div>
);
var appRoot = document.getElementById("app")

//Takes 2 arguments 
//(1)-JSX what you want to render 
//(2) DOM element - where you want to render it
ReactDOM.render(templateTwo, appRoot)

//running in server to watch for changes 
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch