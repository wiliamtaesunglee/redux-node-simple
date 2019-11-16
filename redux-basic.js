'use strict'

const redux = require('redux');
const createStore = redux.createStore;

const initalState = {
  counter: 0,
  status: false
}

//Reducer
const rootReducer = (state = initalState, action) => {
  if(action.type === 'SET_COUNTER')  {
    return {
      ...state, counter: state.counter + 1
      }
  }
  if(action.type === 'ADD_COUNTER') {
   return {
    ...state, counter: state.counter + action.value
    }
  }
  if(action.type === 'SET_TRUE') return { ...state, status: action.status }

  if(action.type === 'SET_FALSE') return { ...state, status: action.status }
  return state
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
store.dispatch({type: 'SET_TRUE', status: true})
store.dispatch({type: 'SET_FALSE', status: false})
store.dispatch({type: 'ADD_COUNTER', value: 30})

