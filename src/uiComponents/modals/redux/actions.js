
import { createAction } from '../../../utils/reduxUtils';

export const ACTION_CONSTANTS = {
  OPEN_NINE_BALL_HELP_MODAL: 'OPEN_NINE_BALL_HELP_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL'
};

const openNineBallHelpModal = () => {
  return (dispatch) => {
    dispatch(createAction(ACTION_CONSTANTS.OPEN_NINE_BALL_HELP_MODAL, null))
  }
}

const closeModal = () => {
  return (dispatch) => {
    dispatch(createAction(ACTION_CONSTANTS.CLOSE_MODAL, null))
  }
}

export default {
  openNineBallHelpModal,
  closeModal
};
