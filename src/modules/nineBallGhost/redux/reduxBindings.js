import { bindActionCreators } from 'redux';

import NineBallGhostActions from './actions';
import ModalActions from '../../../uiComponents/modals/redux/actions';

export const mapStateToProps = state => ({
  ...state.NineBallGhostState,
  ...state.ModalReducer
})

export const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({
      ...NineBallGhostActions,
      ...ModalActions
    }
      , dispatch)
  }
}