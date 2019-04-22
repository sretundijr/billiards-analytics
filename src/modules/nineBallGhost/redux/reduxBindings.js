import { bindActionCreators } from 'redux';

import NineBallGhostActions from './actions';

export const mapStateToProps = state => ({
  ...state.NineBallGhostState
})

export const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(NineBallGhostActions, dispatch)
  }
}