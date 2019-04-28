
import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './redux/reduxBindings';
import PropTypes from 'prop-types';

import NineBallGameInfo from '../../modules/nineBallGhost/components/nineBallInfoModal';

const ModalConductor = (props) => {
  switch (props.selectedModal) {
    case 'NineBallGhostGameInfo':
      return <NineBallGameInfo />
    default:
      return null;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalConductor);
export { ModalConductor };
