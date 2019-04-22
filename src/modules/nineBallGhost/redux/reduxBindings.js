import { bindActionCreators } from 'redux';

export const mapStateToProps = state => ({
  ...state.NineBallGhostState
})

export const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({}, dispatch)
  }
}