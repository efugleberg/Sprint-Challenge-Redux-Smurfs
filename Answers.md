1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
-->  .map  .filter .concat & object.assign   
--> object.assign creates a new object while not extending the properties of another object

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
--> actions:  Packets of information that contain an action type and some data that we want associated with that action type.  Actions are passed into the reducer function as an argument.  The reducer receives the action, and updates the state according to the type and payload on the action.
--> reducers:  calculate the new version of state based on the current state and a give action. Reducers are pure functions and that bind Actions and the store.  They manage and update the state.
--> store:  The store contains the state of our application.  Everything that changes within your app will be represented by a single JS Object known as the store.  The store is known as 'a single source of truth' in a redux app because it is our only state tree and it is not rewritten or reshaped. The only way it can be changes is through an action and a reducer...i.e. it cannot be changed directly.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
-->  Component state is state that is stored locally within a component.  Application state is state that is stored globally in a store (such as Redux).  Application state is beneficial when many components in your App need to access the state.  If there are only a few components in your app or if state is a small part of your app, then component state is probably a better choice.  So....The determining factor in whether to use one or the other is probably asking the question, how many of your components need to access the state?  If it is many, Application (or global) state is preferable, if it is few, then component state.

1.  What is middleware?
-->  Middleware intercepts some process, runs a function at the intercept point, then (usually) continues the process...or it will stop the process entirely.  Middleware provides a way to interact with actions that have been dispatched to the store before they reach the store's reducer.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
-->  Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store’s dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.  Redux-thunk is a middleware that provides the ability to handle asynchronous operations inside our Action Creators.  It's what allows us to make API calls inside of our action creators.

1.  Which `react-redux` method links up our `components` with our `redux store`?
-->  connect()
