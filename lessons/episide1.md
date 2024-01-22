## EPI - 1

### Adding React to our project:

    - Using `cdn`. React library is hosted in cdn and use the links(2) to fetch it in our project
    - Those links have react code which is basically JS functions
    - Why cdn? It speeds up webpage loading
    - How? By caching user content to nearest server
    - When you type React in dev tools, it gives a bunch of functions like useState(), useContext(). It comes from the react cdn links we added to our project. When    using Reactdom, it gives render(), didUpdateMountComponent() etc
    - React works on mobile as well using React Native, React 3d etc that's why 2 files
    - React has 2 files  1. React core files  2. React dom - Files we need to modify react dom

## Creating a React Project inside HTML

    - We can write react code inside <script> inside html page. Just to keep separate files we write the code in App.js and then add <script src="./App.js" />
    - const heading = React.createElement('h1', { attributes to tag ex. id : "heading"}, "what content to add inside h1 like .innerHTML() from JS - hello world ") // core react (Ex: <h1 id="heading"> Hello world </h1>)
    - heading is basically an `object` and render helps to convert objects to HTML tags. Props(obj) contains children that is hello world and attributes
    - React needs to have a root to do Dom manipulation. const root = ReactDom.createRoot(document.getElementbyId('root') from HTML)  // creating root and rendering is the job of reactdom
    - root.render(heading)
    - Dom Manipulation is the most costly operation and react does it efficiently
    - React.createElement is creating objects and only when rendering it is converted to HTML elements
    - Since writing code is very complex using this structure we are using `JSX`

### Will order of script src="app.js" file matter ?

    - Yes, we need to make sure react cdn is before app.js
    - `crossorigin` : It sets the mode of request to http cors. you need it for authorized resource sharing with external third parties. eg. you need cors if you need to pull data from external api into your app

### library vs framework

    - React can be applied in small part of the page, as react works only in the root of the html. (IMP)
    - React can be applied to the existing projects as well
    - framework comes with a package of so many things

### Development (Dev) Link of React:

    - The development link is typically used during the development phase of your application.
    - It includes additional debugging tools, warnings, and helpful error messages.
    - It is larger in file size and may negatively impact the performance of your application.
    - It is not optimised for production use.

### Production (Prod) Link:

    - The production link is meant for deploying your application in a production environment.
    - It excludes development-specific tools, warnings, and error messages.
    - It is smaller in file size, which improves the performance of your application.
    - It is optimized for production use.
