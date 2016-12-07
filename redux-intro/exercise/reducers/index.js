import { createStore } from 'redux';


let initialState = {
  todos: [
    { text: 'Mow the lawn', completed: false },
    { text: 'Mow the lawn', completed: false }
  ],
  visibilityFilter: 'all'
}

function todos(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([{ text: action.text, completed: false }]);
    case 'TOGGLE_TODO':
      return state.map((todo, i) => i == action.id ?
        { text: todo.text, completed: !todo.completed } :
        todo);
    default:
      return state;
  }
}

function visibilityFilter(state, action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
}

function todoApp(state = initialState, action) {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  }
}

let state = todoApp();

// Let's try changing state by changing our visibility filter:
state = todoApp(state, { type: 'SET_VISIBILITY_FILTER', filter: 'completed' })
console.log(state);

state = todoApp(state, { type: 'ADD_TODO', text: 'Do something else' })
console.log(state);

state = todoApp(state, { type: 'TOGGLE_TODO', id: 1 })
console.log(state);

// Create a redux store to store our state.
let store = createStore(todoApp);

// Log the current state every time the state changes.
store.subscribe(() => console.log(store.getState()));

// Dispatch some actions
store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: 'completed' });
store.dispatch({ type: 'ADD_TODO', filter: 'completed' });
store.dispatch({ type: 'TOGGLE_TODO', id: 3 });