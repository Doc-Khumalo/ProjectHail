import { createStore, combineReducers, applyMiddleware } from 'redux'
import messageReducer from './client/reducers/message'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  messageReducer
})
const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store;