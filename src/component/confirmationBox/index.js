import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';


class AlertDialog extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
      open: this.props.showDialog,
    };
  
    handleClose = () => {
      this.props.closeDialog();
    };
  
    deleteUserAndExit = (e) => {
        this.props.deleteUser(e, this.props.contact, this.props.history)
        this.handleClose()
    };
    render() {
      return (
          <Dialog
            open={this.props.showDialog}
            onClose={this.handleClose}

            style={{display:'inline-block'}}
          >
            <DialogTitle id="alert-dialog-title">{"Are you Sure you want to delete?"}</DialogTitle>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                No
              </Button>
              <Button onClick={this.deleteUserAndExit} color="primary" autoFocus>
                Yes
              </Button>
            </DialogActions>
          </Dialog>
      );
    }
  }
  
  export default AlertDialog;