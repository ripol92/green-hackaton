import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class About extends Component {

  constructor() {
    super();

    this.state = {
      open: false
    }

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClickOpen() {
    this.setState({
      open: true
    })
  };

  handleClose() {
    this.setState({
      open: false
    })
  };

  render() {
    return (
      <div>
        <Button variant="outlined" size="small" color="secondary" className={'about-us-btn'} onClick={this.handleClickOpen}>
          о нас
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            <p className="logo">
              <span>
                <span className="green">Clean</span> City
              </span>
            </p>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Чистый город — платформа для решения экологических проблем. <br />
              — мы платформа донесения информации и не несём ответственности за чистоту и экологию <br />
              — данные которые отправляют пользователи полностью на добровольной основе <br />
              — мы не собираем конфиденциальных данных
              <br />
              Мы за чистый город!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Закрыть
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}