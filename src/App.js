import React from 'react';
import './App.css';
import Map from "./app/components/Map";
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import {Button} from '@material-ui/core';
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
      offline: false,  
      selectedLocation: null
    };

    this.onEventClick = this.onEventClick.bind(this);
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
        comment: 'It seems this should not be #environment',
        lng: '66.656566',
        lat: '38.112544',
        file_link: 'https://c8.alamy.com/comp/AWTJNP/recycling-bins-and-a-gabage-can-in-hong-kong-AWTJNP.jpg',
      },
      {
        id: 1,
        comment: 'A lot of garbage near my house. It spoils the environment and my health',
        longitude: '66.656566',
        latitude: '38.112544',
        file_link: 'https://marketplace.canva.com/MADat-cj3_Q/1/thumbnail_large-1/canva-a-wooden-gabage-bin-full%2C-outdoors.-MADat-cj3_Q.jpg',
      },
      {
        id: 2,
        comment: 'Horror, soon it will not be possible to live here at all, so much garbage',
        longitude: '66.656566',
        latitude: '38.112544',
        file_link: 'https://previews.123rf.com/images/joey333/joey3331804/joey333180400018/99911689-gabage-in-thailand-river-after-loy-kratong-night-festival.jpg',
      },{
        id: 3,
        comment: 'It seem to be dangerous in the future',
        longitude: '66.656566',
        latitude: '38.112544',
        file_link: 'http://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.aif.ru%2F009%2F189%2F4b0531678434bf9d5114b06bf97b31f8.JPG&imgrefurl=https%3A%2F%2Fomsk.aif.ru%2Fzkh%2Fzkh_gorod%2Fv_omske_likvidiruyut_nezakonnye_svalki&tbnid=w4VMSOyJw-GhpM&vet=12ahUKEwjW27u3spzoAhXJHZoKHQWIAaEQMygDegUIARDSAQ..i&docid=TGZaME4sf-gmkM&w=640&h=425&itg=1&q=%D0%BD%D0%B5%D0%B7%D0%B0%D0%BA%D0%BE%D0%BD%D0%BD%D1%8B%D0%B5%20%D1%81%D0%B2%D0%B0%D0%BB%D0%BA%D0%B8&ved=2ahUKEwjW27u3spzoAhXJHZoKHQWIAaEQMygDegUIARDSAQ',
      },{
        id: 4,
        comment: 'OMG i can not live here. it is danger',
        longitude: '66.656566',
        latitude: '38.112544',
        file_link: 'http://www.google.com/imgres?imgurl=https%3A%2F%2F24.kz%2Fmedia%2Fk2%2Fitems%2Fcache%2F03d57c39eef942c96d590bd0159c27f7_XL.jpg&imgrefurl=http%3A%2F%2Fnubis162.blogspot.com%2F2018%2F12%2Fblog-post_13.html&tbnid=OqyyiuVp-zGXfM&vet=12ahUKEwjW27u3spzoAhXJHZoKHQWIAaEQMygLegUIARDiAQ..i&docid=j4Y7VVV53Qw9pM&w=918&h=441&itg=1&q=%D0%BD%D0%B5%D0%B7%D0%B0%D0%BA%D0%BE%D0%BD%D0%BD%D1%8B%D0%B5%20%D1%81%D0%B2%D0%B0%D0%BB%D0%BA%D0%B8&ved=2ahUKEwjW27u3spzoAhXJHZoKHQWIAaEQMygLegUIARDiAQ',
      },{
        id: 5,
        comment: 'Another disaster is coming',
        longitude: '66.656566',
        latitude: '38.112544',
        file_link: 'http://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.brookings.edu%2Fwp-content%2Fuploads%2F2016%2F06%2Fwildfire001.jpg&imgrefurl=https%3A%2F%2Fwww.brookings.edu%2Fmulti-chapter-report%2Fthe-year-that-shook-the-rich-a-review-of-natural-disasters-in-2011%2F&tbnid=mMiXM4na8jp1GM&vet=12ahUKEwjlmY_zspzoAhVnHpoKHUXSCT0QMygCegUIARDUAQ..i&docid=5nu3e4K5RByWpM&w=3500&h=2080&q=disasters&ved=2ahUKEwjlmY_zspzoAhVnHpoKHUXSCT0QMygCegUIARDUAQ',
      },
    ];

    return (
      <div className="App">
        {/* <Header /> */}
        <Grid container>
          <Grid item xs={4} md={4} xl={3}>
            <Events eventItems={eventItems} onEventClick={this.onEventClick}/>
          </Grid>
          <Grid item xs={8} md={8} xl={9}>
            <Map selectedLocation = {this.state.selectedLocation}/>
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

  onEventClick(event){
    this.setState({
      selectedPlace: event
    })
  }
}

export default App;
