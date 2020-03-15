import React from 'react';
import './App.css';
import Map from "./app/components/Map";
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Events from './app/components/Events/Events';
import Notifier from './app/components/Notifier/Notifier';
import ClCamera from './app/components/ClCamera/ClCamera';

class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      open: false,
      offline: false
    }

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }

  componentDidMount() {
    window.addEventListener('online', () => {
      this.setState({ offline: false });
    });

    window.addEventListener('offline', () => {
      this.setState({ offline: true });
    });
  }

  componentDidUpdate() {
    let offlineStatus = !navigator.onLine;
    if (this.state.offline !== offlineStatus) {
      this.setState({ offline: offlineStatus });
    }
  }

  handleOpen() {
    this.setState({
      open: true
    })
  };

  handleClose() {
    this.setState({
      open: false
    })
  };

  handleSend() {
    console.log('send');
  }

  render() {
    const eventItems = [
      {
        id: 0,
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        longitude: '66.656566',
        latitude: '38.112544',
        pathToPhoto: 'https://c8.alamy.com/comp/AWTJNP/recycling-bins-and-a-gabage-can-in-hong-kong-AWTJNP.jpg',
      },
      {
        id: 1,
        comment: 'Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        longitude: '66.656566',
        latitude: '38.112544',
        pathToPhoto: 'https://marketplace.canva.com/MADat-cj3_Q/1/thumbnail_large-1/canva-a-wooden-gabage-bin-full%2C-outdoors.-MADat-cj3_Q.jpg',
      },
      {
        id: 2,
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        longitude: '66.656566',
        latitude: '38.112544',
        pathToPhoto: 'https://previews.123rf.com/images/joey333/joey3331804/joey333180400018/99911689-gabage-in-thailand-river-after-loy-kratong-night-festival.jpg',
      },
    ];

    return (
      <div className="App">
        {/* <Header /> */}
        <Grid container>
          <Grid item xs={4} md={4} xl={3}>
            <Events eventItems={eventItems} />
          </Grid>
          <Grid item xs={8} md={8} xl={9}>
            <Map />
          </Grid>
        </Grid>

        <IconButton
          color="secondary"
          onClick={this.handleOpen}
          variant="primary"
          className="add-photo-button"
          aria-label="add a photo">
          <PhotoCamera />
        </IconButton>

        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Нашли мусор?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Проявите социальную ответственность - сфоткайте и отправьте нам.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Комментарий"
              type="text"
              fullWidth
              multiline
            />

            <Notifier offline={this.state.offline} />
            <ClCamera offline={this.state.offline} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSend} color="primary">
              Send
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default App;
