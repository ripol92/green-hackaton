import React from "react";
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import EventDetailDialog from "./EventDetailDialog";
import Button from '@material-ui/core/Button';

const eventsFromApi = [
    { lat: -34.397, lng: 150.644, comment: "Comment", photoUrl: "https://images.unsplash.com/photo-1536084577616-ea0e7911a977?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" },
    { lat: -35.397, lng: 150.644, comment: "Another text", photoUrl: "https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" },
    { lat: -36.397, lng: 150.644, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
];

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPlace: null,
            activeMarker: null,
            showingInfoWindow: false,
            showDialog: false
        }
    }

    render() {
        const markers = eventsFromApi.map((event, index) => {
            const { lng, lat, comment } = event;
            return (
                <Marker
                    name={"fef"}
                    position={{ lat, lng }}
                    onClick={this.onMarkerClick}
                    key={index}
                >
                    {this.state.selectedPlace &&
                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}
                            onClose={this.onClose}
                        >
                            <div>
                                {comment}
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
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >
                {markers}
            </GoogleMap>));
        return (
            <div>
                <MyMapComponent
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAuHu6uhb9F2sLYrup2eydm_rwxKloUYEU"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100vh` }} />}
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

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

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