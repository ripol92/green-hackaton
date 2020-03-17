import React from "react";
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import EventDetailDialog from "./EventDetailDialog";
import Button from '@material-ui/core/Button';

class Map extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedPlace: null,
            activeMarker: null,
            showingInfoWindow: false,
            showDialog: false,
            selectedLat: null,
            selectedLng: null,
            defaultZoomLat: this.props.selectedLocation && this.props.selectedLocation.lat,
            defaultZoomLng: this.props.selectedLocation && this.props.selectedLocation.lng,
            eventsFromApi: this.props.locations
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            defaultZoomLat: props.selectedLocation && props.selectedLocation.lat,
            defaultZoomLng: props.selectedLocation && props.selectedLocation.lng,
        })
    }

    render() {
        let locations = this.props.locations ? this.props.locations : [];
        const markers = locations.map((event, index) => {
            const { long, lat, comment, image_link } = event;
            return (
                <Marker
                    key={index}
                    name={"fefe"}
                    position={{ lat, lng: long }}
                    onClick={this.onMarkerClick}
                >
                    {(this.state.showingInfoWindow &&
                        this.state.selectedLng === event.long &&
                        this.state.selectedLat === event.lat
                    ) &&
                        <InfoWindow
                            visible={this.state.showingInfoWindow}
                            onClose={this.onClose}
                        >
                            <div style={{ width: '220px' }}>
                                <p>
                                    {comment}
                                </p>
                                <img src={image_link} alt="garbage" style={{ maxWidth: '220px' }} />
                                <hr />
                                <Button color={"primary"}>
                                    Подробнее
                            </Button>
                            </div>
                        </InfoWindow>
                    }
                </Marker>
            );
        });

        const MyMapComponent = withScriptjs(withGoogleMap((props) =>
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: this.state.defaultZoomLat ? this.state.defaultZoomLat : 38.559547, lng: this.state.defaultZoomLng ? this.state.defaultZoomLng : 68.757950 }}
            >
                {markers}
            </GoogleMap>));

        return (
            <div>
                <MyMapComponent
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAuHu6uhb9F2sLYrup2eydm_rwxKloUYEU"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div className="MyMapComponent" />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
                <EventDetailDialog
                    showDialog={this.state.showDialog}
                    photoUrl={this.state.photoUrl}
                    onCLose={this.handleDialogClose}
                />
            </div>
        );
    }

    onMarkerClick = (props) => {
        const selectedLng = props.latLng.lng();
        const selectedLat = props.latLng.lat();

        this.setState({
            selectedPlace: props,
            showingInfoWindow: true,
            selectedLng,
            selectedLat
        });
    };

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    handleDialogClose() {
        this.setState({
            showDialog: false
        })
    }
}

export default Map;