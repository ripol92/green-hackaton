import React from "react";
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";
import Button from '@material-ui/core/Button';

// props:
//   photo uri
//   show or not show photo

export default class EventDetailDialog extends React.Component {
    constructor(props) {
        super();
        this.handleClose = this.handleClose.bind(this);
    }

    render() {
        return (
            <Dialog open={this.props.showDialog}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
            >
            <DialogTitle id={"alert-dialog-title"}>Photo Title</DialogTitle>
            <DialogContent>
                {this.props.location && <img src={this.props.photoUrl} alt="photo1"/>}
                <hr/>
                {this.props.comment}
            </DialogContent>
            <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                    Закрыть
                </Button>
            </DialogActions>
            </Dialog>
        )
    }

    handleClose() {
        this.props.onCLose();
    }
}