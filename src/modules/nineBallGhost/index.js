import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './redux/reduxBindings';

import './index.css';

const NineBallGhost = (props) => {
  return (
    <div>
      Nine Ball Ghost
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(NineBallGhost);
export { NineBallGhost }
