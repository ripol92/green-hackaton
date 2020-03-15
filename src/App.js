import React from 'react';
import './App.css';
import Map from "./app/components/Map";
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

import Events from './app/components/Events/Events';

class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      selectedLocation: null
    };
    this.onEventClick = this.onEventClick.bind(this);
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

        <IconButton color="white" variant="primary" className="add-photo-button" aria-label="add a photo">
          <PhotoCamera />
        </IconButton>
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
