import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import NineBallGhostReducer from './modules/nineBallGhost/redux/reducers';
import ModalReducer from './uiComponents/modals/redux/reducers';

const reducers = combineReducers({
  NineBallGhostState: NineBallGhostReducer,
  ModalState: ModalReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;