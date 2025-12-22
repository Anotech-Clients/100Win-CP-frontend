import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const ZeroBalanceDepositModal = ({ open, onClose }) => {
  const navigate = useNavigate();

  const handleDepositNow = () => {
    // Navigate to the deposit page and keep modal open until balance changes
    navigate('/wallet/deposit');
    if (onClose) onClose();
  };

  const handleContactSupport = () => {
    navigate('/customer-service');
    if (onClose) onClose();
  };

  // Prevent backdrop or escape from closing the dialog; only actions close it
  const handleCloseAttempt = (event, reason) => {
    if (reason === 'backdropClick' || reason === 'escapeKeyDown') {
      // ignore
      return;
    }
    if (onClose) onClose();
  };

  return (
    <Dialog
      open={!!open}
      onClose={handleCloseAttempt}
      aria-labelledby="zero-balance-dialog-title"
      maxWidth="xs"
      fullWidth
    >
      <DialogTitle id="zero-balance-dialog-title">Low Balance</DialogTitle>
      <DialogContent>
        <Typography variant="body1" gutterBottom>
          Your main wallet and third-party wallet are both at zero balance. To continue using services, please deposit funds.
        </Typography>
        <Typography variant="body2" color="textSecondary">
          If you need help, contact our customer service.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleContactSupport} color="inherit">
          Contact Support
        </Button>
        <Button onClick={handleDepositNow} variant="contained" color="primary">
          Deposit Now
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ZeroBalanceDepositModal;
