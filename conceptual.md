### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  
    ```React is a frontend framework which was developed ans sopnsored by Facebook. Using React when working on projects with multiple state changes that demands high users interaction and why using it because it allows developers to create fast user interfaces for websites.```

- What is Babel?
    ```babel is a Javascript complier which converts modern JS code into an older version of JS that more brownsers are able to read. ```

- What is JSX?
  ```It stand for Javascript XML which allows us to write HTML in React```

- How is a Component created in React?
```There're many ways to create Component but here is one of that write a JS function taht returns JSX element ```

- What are some difference between state and props?
  ```props is used to pass data from one component to another.props cant be changed or modified , read only and immutable while state can be passed within the component only and it's both read and write```

- What does "downward data flow" refer to in React?
 ```Downward data flow is the idea that parent components pass data down to their children via props```

- What is a controlled component?
  ```A controlled component is a component that renders form elements and controlls them by keeping the form data in the component's state```

- What is an uncontrolled component?
```An uncontrolled component is a component that maintains its own internal state.```
- What is the purpose of the `key` prop when rendering a list of components?
  ```The key props can create a relationship btw component and the DOM element.```

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
 ```because you are not passing a unique key for each child element or component```

- Describe useEffect.  What use cases is it used for in React components?
```useEffect is a build in hoook that allow you to perform side effect in you components, run every render, or only after one render or only when the parameter change```

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
  ```The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.```

- When would you use a ref? When wouldn't you use one?
  ```when you need to imperatively call a function for a behavior React doesn't allow you to control```

- What is a custom hook in React? When would you want to write one?
  ```A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. That's it! If you have code in a component that you feel would make sense to extract, either for reuse elsewhere or to keep the component simpler, you can pull that out into a function.```
