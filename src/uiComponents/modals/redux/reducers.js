
import { ACTION_CONSTANTS } from './actions';
import { MODAL_TYPES } from '../utils';

const initialState = () => {
  return Object.assign({
    selectedModal: null
  })
}

const ModalReducer = (state = initialState(), action) => {
  switch (action.type) {
    case ACTION_CONSTANTS.OPEN_NINE_BALL_HELP_MODAL:
      return openNineBallHelpModal(state);
    case ACTION_CONSTANTS.CLOSE_MODAL:
      return closeModal(state);
    default:
      return state;
  }
}

export const openNineBallHelpModal = (state) => {
  return Object.assign({}, state, {
    selectedModal: MODAL_TYPES.NINE_BALL_HELP_MODAL
  })
}

export const closeModal = (state) => {
  return Object.assign({}, state, {
    selectedModal: null
  })
}

export default ModalReducer;
