import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, Button } from './StyledComponents';

const Payment = ({ onClose }) => (
  <Dialog>
    <div className="dialog" style={{ width: 500, height: 150 }}>
      <div className="dialog-body">
        <h1>THANK YOU!</h1>
        <Button onClick={onClose} block>CLOSE</Button>
      </div>
    </div>
  </Dialog>
)
PropTypes.propTypes = {
  onClose: PropTypes.func.isRequired,
}
export default Payment
