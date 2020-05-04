import React from 'react';
import './App.css';
import Map from "./app/components/Map";
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Events from './app/components/Events/Events';
import AddEventDialog from "./app/components/AddEventDialog";
import Axios from "axios";
import Pagination from "react-js-pagination";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offline: false,
      selectedLocation: null,
      photo: null,
      addEventDialogOpen: false,
      applications: null,
      paginationObject: null,
      selectedApplicationId: null
    };

    this.onEventClick = this.onEventClick.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    this.getApplications(null);
  }

  getApplications = (pageNumber) => {
    let backendUrl = "http://cleancity.foodstan.tj/api/get_apps";
    if (pageNumber){backendUrl = backendUrl + "?page=" + pageNumber}

    let urlString = window.location.href;
    let urlStaged = urlString.replace('/', '');
    let url = new URL(urlStaged);

    const id = url.searchParams.get('id');
    const sign = pageNumber ? "&" : "?";
    if (id){backendUrl = backendUrl + sign + "id=" + id}

    Axios.get(backendUrl).then(resp => {
      console.log(resp.data);
      this.setState({
        paginationObject: resp.data,
        applications: resp.data.data
      }, () => {
        if (pageNumber) {
          window.history.pushState(null, '',  window.location.pathname);
          return;
        }
        let urlString = window.location.href;
        let urlStaged = urlString.replace('/', '');
        let url = new URL(urlStaged);

        const id = url.searchParams.get('id');
        const applications = this.state.applications;
        let selectedPosition = null;

        for (let i = 0; i < applications.length; i++) {
          if (applications[i].id == id) {
            selectedPosition = applications[i]
          }
        }
        if (selectedPosition) {
          this.setState({
            selectedLocation: {lat: selectedPosition.lat, lng: selectedPosition.long}
          })
        }
      })
    });
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

  // onEventClick(event) {
  //   this.setState({
  //     selectedLocation: event
  //   })
  // }

  render() {
    const eventItems = this.state.applications;
    const paginationComponent = this.state.paginationObject &&
        <Pagination
        data={this.state.paginationObject.data}
        activePage={this.state.paginationObject.current_page}
        itemsCountPerPage={10}
        totalItemsCount={this.state.paginationObject.total}
        pageRangeDisplayed={5}
        itemClass="page-item"
        linkClass="page-link"
        onChange={this.getApplications}/>;
    return (
      <div className="App">
        {/* <Header /> */}
        <Grid container>
          <Grid item xs={12} md={4} xl={3}>
            <Events eventItems={eventItems} onEventClick={this.onEventClick} pagination={paginationComponent}/>
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
      selectedPlace: event,
      selectedLocation: {lat: event.lat, lng: event.long}
    }, () => {
      if ('URLSearchParams' in window) {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set("id", event.id);
        const newRelativePathQuery = window.location.pathname + '?' + searchParams.toString();
        window.history.pushState(null, '', newRelativePathQuery);
      }

    })
  }

}

export default App;
