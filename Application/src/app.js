//JSX - JavaScript XML (JS Syntax Extenstion)
console.log("App.js is running")

//CONDITIONAL RENDERING
//if statements 
//ternary operators 
//logical and operator 
//---------------------------


//rendering object TEMPLATE
const app = {
    title: 'The Indecision App',
    subtitle: 'A basic react app',
}

const template = (
    <div>
        <h1 id="apptitle">{app.title}</h1>
        <p>{app.subtitle}</p>
    </div>
);



//TemplateTwo
const user = {
    name: 'Bill',
    age: 40,
    location: 'Canada',
    options: ['One', 'Two']
}

//conditional rendering function
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}


//renders age if above 18 for user.age
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
        <p>{user.options.length > 0 ? 'The options' : 'No options available'}</p>

    </div>
);
const appRoot = document.getElementById("app")






//Takes 2 arguments 
//(1)-JSX what you want to render 
//(2) DOM element - where you want to render it
ReactDOM.render(templateTwo, appRoot)

        //running in server to watch for changes 
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch