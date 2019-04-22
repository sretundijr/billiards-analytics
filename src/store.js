import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import NineBallGhostReducer from './modules/nineBallGhost/redux/reducers';

const reducers = combineReducers({
  NineBallGhostState: NineBallGhostReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;