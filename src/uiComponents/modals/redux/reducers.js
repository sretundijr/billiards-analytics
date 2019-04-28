// import { ACTION_CONSTANTS } from './actions';

const initialState = () => {
  return Object.assign({
    selectedModal: 'NineBallGhostGameInfo'
  })
}

const ModalReducer = (state = initialState(), action) => {
  switch (action.type) {

    default:
      return state;
  }
}

export default ModalReducer;
