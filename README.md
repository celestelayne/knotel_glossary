This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Spin Up a Project from Scratch

* **[Getting Started](#getting-started):** Setting up React boilerplate.
* **[ApolloClient Setup](#apolloclient-setup):** Create Instance of ApolloClient.
* **[Create GraphQL Server](#create-graphql-server):** Create Express server.
* **[Connect Frontend to Backend](#connect-frontend-to-backend):** Connect React to GraphQL Server Using ApolloClient.

### `Getting Started`

First, let's create the React app by initiating a new basic React project in the newly created project folder knotel_glossary.

```bash
$ npm init react-app knotel_glossary
$ cd knotel_glossary
```
Inside the `package.json` file, you will see several scripts have been provided that allows you to run several commands from Terminal: `react`, `react-dom` and `react-scripts`. To start up the application, in the Terminal type:

```bash
$ npm start. #Starts the development server.
```

By using the `npm start` command the live-reloading development web server is started and you can now view knotel_glossary in the browser:

```bash
  Local:            http://localhost:3000/
  On Your Network:  http://10.0.80.246:3000/
```
### `React Setup with Parcel`



### `Setting Up Folder Structure`

In the `src` folder, add the following folders:

```bash
$ mkdir src/assets
$ mkdir src/components
$ mkdir src/services
```
The `assets` folder is where we will maintain images and videos to be used in the application.

```md
└── src
    ├── assets
        ├── images
        ├── videos
```
The `components` folder is where we will set up our component file structure.

```md
└── src
    ├── components
    │   ├── List
    │       ├── List.js
    │       ├── List.css
    │   ├── ListItem
    │       ├── ListItem.js
    │       ├── ListItem.css

```

The `services` folder is where we will make our api calls.

```md
└── src
    ├── services
        ├── apiservices.js
```

### `File Structure`

The `src` folder contains the core business logic of our React application. Ultimately, the project folder structure should look similar to the following:

**Note: We are using the .jsx extension because the components are not standard JavaScript and we want to maintain a pattern where JavaScript goes in .js files.**

### `House Cleaning`

Now, let’s do some house cleaning:

In the src folder, delete the following files:

```bash
$ rm serviceWorker.js
$ rm logo.svg
```
Then, in the `index.js` file, delete all references to serviceWorker and in the `src/App.js`, delete the line that imports the logo.

### `Hello Hello`

Now, modify the App Component to reflect the following changes in the `return()`.
The `src/App.js` file should look similar to the following:

```js
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello Hello</h1>
      </div>
    );
  }
}

export default App;
```
Our environment is set up and now you’re ready to move on!

### `ApolloClient Setup`

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### `Create GraphQL Server`

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting


### `Connect Frontend to Backend`