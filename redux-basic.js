'use strict'

const redux = require('redux');
const createStore = redux.createStore;

const initalState = {
  counter: 0,
  status: false
}

//Reducer
const rootReducer = (state = initalState, action) => {

  switch(action.type) {
    case 'SET_COUNTER':
      return { ...state, counter: state.counter + 1 }
    case 'ADD_COUNTER':
      return { ...state, counter: state.counter + action.value }
    case 'SET_STATUS':
      return { ...state, status: action.status }
    default:
      return state
  }
}

//Store
const store = createStore(rootReducer)

//Subscription
store.subscribe(() => {
  console.log('[sbuscription]', store.getState())
})

//DispatchReducer
store.dispatch({type: 'SET_COUNTER'})
store.dispatch({type: 'ADD_COUNTER', value: 5})
store.dispatch({type: 'SET_STATUS', status: true})
store.dispatch({type: 'SET_STATUS', status: false})
store.dispatch({type: 'ADD_COUNTER', value: 30})

