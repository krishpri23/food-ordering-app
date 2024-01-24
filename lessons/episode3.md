## Episode 3

    - npx parcel index.html creates a dev build and host it on local server
    - JSX is not html tag, makes dev easier by more readable . It is NOT a part of React
    - JSX cant be understood by the browser since it is not javascript. Then how does jsx code run in react?
    - Even before JSX goes to browser it is transpiled to React Element then to HTML Tag by parcel (babel) so that browser understands.
    - Babel is a JS compiler

### React components

    - It is a JS function that returns react element (jsx)
    - To call a component, use </> or {component()}
    - cross-site scripting : attacker can do an attack on the browser and read cookie, local storage, session etc
    - JSX takes care of injection attack from api {data} is sanitized
