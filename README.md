# useState

## Learning Goals

- [ ] **Use React to control the state of the application**
- [ ] **Hold data in state with useState**
- [ ] **Update State with useState**
- [ ] **Use events to update application state**

## Component Lifecycle

Components in React go through three main phases during their lifecycle:

- **Mounting**: When the component is added to the DOM for the first time.
- **Updating**: When the component is already in the DOM and re-renders in response to changes in props or state.
- **Unmounting**: When the component is removed from the DOM.

Each phase allows you to run specific logic using lifecycle methods (in class components) or hooks like `useEffect` (in functional components).

## Virtual DOM in React

Under the hood, React uses the **Virtual DOM (VDOM)** to update content in the browser efficiently. The Virtual DOM is a lightweight copy of the actual DOM.

React compares the Virtual DOM to the real DOM, looking for differences. When it finds changes, React updates only the parts of the real DOM that are different. This process makes DOM manipulation much more efficient and improves performance.

## useState Hook

[Use State](https://react.dev/reference/react/useState)

## React Hooks and useState

Hooks in React are functions that let you use state and other lifecycle features in functional components.

One of the most commonly used hooks is `useState`, which allows you to manage local component state. State is an object (or value) that holds information about the component. When state changes, React re-renders the component to reflect those updates.

The `useState` hook returns two things:

- The current state value
- A setter function to update that state

By convention, the setter function starts with `set` followed by the name of the state variable. For example, if your state is `count`, the setter would be `setCount`.

```
import {data} from "./data/data.js"
import {useState} from "react";

//App is the root of our application and where we load in our components.
function App() {
  const [restaurantState, setRestaurants] = useState([...data])

  return (
    <div className="App">
      <RestaurantsContainer  restaurants={restaurantState}/>
    </div>
  );
}

export default App;

```

## Lab Deliverables

1. Set up

- Navigate into your project folder: cd usestate
  -Install dependencies: npm install
- Start the development server: npm run dev
- Open your browser and go to http://localhost:5173/ to view your app

2. Add State to App

- Import useState from React.
- Add this line to the top of App `const [restaurantState, setRestaurants] = useState()`.Did you know you can extract multiple variables from arrays and objects using a feature called destructuring?. `useState` returns an array with two elements: the first is the current state, and the second is the function used to update that state. In this example, we're using destructuring to assign those elements to two variables: restaurantState, which holds the current state, and setRestaurants, which is the function to update the state.
- Pass useState([...data]). We’re using the spread operator (...) here, which takes the contents of the data array and puts them into a new array.
- Pass the RestaurantsContainer state
- Run the application with `npm run start`
<details>
  <summary>Click Here to view solution</summary>

```

import RestaurantsContainer from "./components/RestaurantsContainer";
import { restaurants } from "./data/data.js";
import { useState } from "react";
import "./App.css";

function App() {
  const [restaurantState, setRestaurants] = useState([...restaurants]);

  return (
    <div className="App">
      <RestaurantsContainer restaurants={restaurantState} />
    </div>
  );
}

export default App;


```

</details>

2. OnClick Events

<details>
  <summary>Click Here to view solution</summary>

```
import { useState } from "react";
function Restaurant(props) {
  const [hours, setHours] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleHours = () => {
    setHours((prev) => !prev);
  };
  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <div className="restaurant">
      <img src={props.restaurant.image} alt={props.name} />
      <h2>{props.restaurant.name}</h2>
      <ul>
        <li>{props.restaurant.address}</li>
        <li>{props.restaurant.phone}</li>
        <li>{props.restaurant.cuisine}</li>
        <li>{props.restaurant.rating}</li>
      </ul>
      <button onClick={handleHours}>Hours</button>
      <button onClick={handleMenu}>Menu</button>

    </div>
  );
}

export default Restaurant;


```

</details>

3. Conditonal rendering

- Below the toggle buttons, conditionally render the restaurant’s menu:

  - Check if `menu` is set to `true`.
  - If it is, display an unordered list (`<ul>`).
  - Inside the list, map through the `menu` array in `props.restaurant`.
  - For each item, display the name and price in a list item (`<li>`).

- Below the menu, conditionally render the restaurant’s hours:
  - Check if `hours` is set to `true`.
  - If it is, display an unordered list (`<ul>`).
  - Use `Object.entries()` to loop through the `hours` object in `props.restaurant`.
  - For each day and time:
    - Capitalize the day name.
    - Display the day and corresponding hours in a list item (`<li>`).

<details>
  <summary>Click Here to view solution</summary>

```
import { useState } from "react";
function Restaurant(props) {
  const [hours, setHours] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleHours = () => {
    setHours((prev) => !prev);
  };
  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <div className="restaurant">
      <img src={props.restaurant.image} alt={props.name} />
      <h2>{props.restaurant.name}</h2>
      <ul>
        <li>{props.restaurant.address}</li>
        <li>{props.restaurant.phone}</li>
        <li>{props.restaurant.cuisine}</li>
        <li>{props.restaurant.rating}</li>
      </ul>
      <button onClick={handleHours}>Hours</button>
      <button onClick={handleMenu}>Menu</button>
      {menu && (
        <ul>
          {props.restaurant.menu.map((menuItem, index) => (
            <li key={index}>{`${menuItem.item} $${menuItem.price}`}</li>
          ))}
        </ul>
      )}
      {hours && (
        <ul>
          {Object.entries(props.restaurant.hours).map(([day, time]) => (
            <li key={day}>
              <strong>{day.charAt(0).toUpperCase() + day.slice(1)}:</strong>{" "}
              {time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Restaurant;


```

</details>

## Submission Instructions

1. Push your code to GitHub.
2. Submit the link to your GitHub repository URL.
