
import React from 'react';
import PropTypes from 'prop-types';

import { nineBallGhostCopy } from '../utills';

import GameInfoModal from '../../../uiComponents/modals/components/gameInfoModal';
import GameHeader from '../../../elements/headers/gameHeader';

import './css/nineBallInfoModal.css';

const NineBallInfoModal = (props) => {
  return (
    <GameInfoModal>
      <div className='nineBallInfoModal-container'>
        <GameHeader
          className='nineBallInfoModal-header'
          headerLabel='How to Play the Ghost in Nine Ball'
        />
        <p className='nineBallInfoModal-content'>{nineBallGhostCopy.gameRules}</p>
      </div>
    </GameInfoModal>
  )
}

export default NineBallInfoModal;

NineBallInfoModal.propTypes = {
  props: PropTypes.object
}
