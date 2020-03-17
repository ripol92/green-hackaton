import React from 'react';
import './App.css';
import Map from "./app/components/Map";
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Events from './app/components/Events/Events';
import AddEventDialog from "./app/components/AddEventDialog";
import Axios from "axios";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offline: false,
      selectedLocation: null,
      photo: null,
      addEventDialogOpen: false,
      applications: null,
      pagination: null
    };

    this.onEventClick = this.onEventClick.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    Axios.get("http://cleancity.test/api/get_apps").then(resp => {
        this.setState({
          applications: resp.data.data
        })
    })
  }

  handleOpen() {
    this.setState({
      addEventDialogOpen: true
    })
  };

  handleClose() {
    this.setState({
      addEventDialogOpen: false
    })
  };

  onEventClick(event) {
    this.setState({
      selectedLocation: event
    })
  }

  render() {
    const eventItems = this.state.applications;
    return (
      <div className="App">
        {/* <Header /> */}
        <Grid container>
          <Grid item xs={12} md={4} xl={3}>
            <Events eventItems={eventItems} onEventClick={this.onEventClick} />
          </Grid>
          <Grid item xs={12} md={8} xl={9}>
            <Map selectedLocation={this.state.selectedLocation} locations={eventItems} />
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
        <AddEventDialog open={this.state.addEventDialogOpen} onClose={this.handleClose}/>
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
