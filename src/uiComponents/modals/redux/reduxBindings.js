import { bindActionCreators } from 'redux';

import ModalActions from './actions';

export const mapStateToProps = state => ({
  ...state.ModalState
})

export const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(ModalActions, dispatch)
  }
}