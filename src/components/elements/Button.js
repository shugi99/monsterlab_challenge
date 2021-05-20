import React from 'react';
import PropTypes from 'prop-types';

import {StyledBtn, StyledBtnSmall} from '../styles/StyledButton';

const Button = ({text, callback, type}) => {
  return (
    <>
      {type === 'big' ? (
        <StyledBtn onClick={callback}>{text}</StyledBtn>
      ) : (
        type === 'small' && (
          <StyledBtnSmall onClick={callback}>{text}</StyledBtnSmall>
        )
      )}
    </>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  callback: PropTypes.func,
};

export default Button;
