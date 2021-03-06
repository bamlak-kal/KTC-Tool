import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { memo } from 'react';
import './tables.css';

const AddNotice = (props) => {


    return (
        <Dialog fullWidth maxWidth="sm" open={props.open} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add Notice</DialogTitle>
            <DialogContent>
                <div className="form-container">
                    <TextField 
                        id="outlined-basic" 
                        label="Name" 
                        variant="outlined" 
                        onChange={props.setName}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Data"
                        multiline
                        rows={4}
                        defaultValue=""
                        variant="outlined"
                        onChange={props.setData}
                    />
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={props.handleAdd} color="primary">
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    );
    
}

export default memo(AddNotice);
