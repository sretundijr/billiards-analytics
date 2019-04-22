import { bindActionCreators } from 'redux';

export const mapStateToProps = state => ({
})

export const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({}, dispatch)
  }
}