
import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './redux/reduxBindings';
import PropTypes from 'prop-types';

import NineBallGameInfo from '../../modules/nineBallGhost/components/nineBallInfoModal';
import { MODAL_TYPES } from './utils';

const ModalConductor = (props) => {
  switch (props.selectedModal) {
    case MODAL_TYPES.NINE_BALL_HELP_MODAL:
      return <NineBallGameInfo {...props} />
    default:
      return null;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalConductor);
export { ModalConductor };

ModalConductor.propTypes = {
  selectedModal: PropTypes.string
}
