//JSX - JavaScript XML (JS Syntax Extenstion)
console.log("App.js is running")

//CONDITIONAL RENDERING
//if statements 
//ternary operators 
//logical and operator 
//---------------------------


//rendering object TEMPLATE
var app = {
    title: 'The Indecision App',
    subtitle: 'A basic react app',
}

var template = (
    <div>
        <h1 id="apptitle">{app.title}</h1>
        <p>{app.subtitle}</p>
    </div>
);



//TemplateTwo
var user = {
    name: 'Bill',
    age: 25,
    location: ''
}

//conditional rendering function
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}



var templateTwo = (
    <div>
        <h1>{user.name.toUpperCase() + "!"}</h1>
        <p>Age: {user.age}</p>
        {getLocation(user.location)}
    </div>
);
var appRoot = document.getElementById("app")






//Takes 2 arguments 
//(1)-JSX what you want to render 
//(2) DOM element - where you want to render it
ReactDOM.render(templateTwo, appRoot)

//running in server to watch for changes 
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch