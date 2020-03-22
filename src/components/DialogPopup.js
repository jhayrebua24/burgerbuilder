import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, Button } from './StyledComponents';

const DialogPopup = ({
  message,
  okText,
  onOk,
  onCancel,
  cancelText,
}) => (
  <Dialog>
    <div>
      <p>{message}</p>
      <Button onClick={onOk} block>{okText}</Button>
      <Button onClick={onCancel} color="#e74c3c" block>{cancelText}</Button>
    </div>
  </Dialog>
)
DialogPopup.propTypes = {
  message: PropTypes.string,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
}

DialogPopup.defaultProps = {
  message: 'Nice',
  okText: 'Ok',
  onOk: () => null,
  onCancel: () => null,
  cancelText: 'close',
}
export default DialogPopup
