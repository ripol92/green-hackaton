import React from "react";
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import EventDetailDialog from "./EventDetailDialog";
import Button from '@material-ui/core/Button';

const eventsFromApi = [
    { id: Math.random().toString(36).substring(7), lat:38.573300, lng: 68.404420, comment: "Comment", photoUrl: "https://images.unsplash.com/photo-1536084577616-ea0e7911a977?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" },
    { id: Math.random().toString(36).substring(7), lat:38.674029, lng: 68.874320, comment: "Another text", photoUrl: "https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" },
    { id: Math.random().toString(36).substring(7), lat:38.823331, lng: 68.775570, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.823341, lng: 68.775510, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.824331, lng: 68.785570, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.923331, lng: 68.725570, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.825331, lng: 68.775579, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.823431, lng: 68.275571, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.744331, lng: 68.755572, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.723334, lng: 68.235574, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.813331, lng: 68.805573, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { lat: 39.823331, lng: 68.125578, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.153381, lng: 68.135570, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.773331, lng: 68.805570, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.823331, lng: 68.175570, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.823234, lng: 68.172170, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.823457, lng: 68.510570, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.823331, lng: 68.15572, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.823341, lng: 68.175340, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.823356, lng: 68.186570, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.823312, lng: 68.175570, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.823391, lng: 68.175770, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.823331, lng: 68.143570, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.823331, lng: 68.195570, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.823741, lng: 68.175570, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.823339, lng: 68.205570, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.223312, lng: 68.915570, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.823999, lng: 68.149570, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.823331, lng: 68.175570, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.823410, lng: 68.789570, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.823335, lng: 68.479470, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.823131, lng: 68.172270, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.825454, lng: 68.125570, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.823339, lng: 68.175550, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.824028, lng: 68.945570, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.153331, lng: 68.651570, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.703320, lng: 68.105570, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.903331, lng: 68.925570, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.832331, lng: 68.235570, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.823231, lng: 68.195570, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.821031, lng: 68.177770, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.823431, lng: 68.205570, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.823981, lng: 68.215570, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.823379, lng: 68.171580, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.823379, lng: 68.215570, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.923231, lng: 68.195570, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.553313, lng: 68.175570, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.123331, lng: 68.195570, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.823323, lng: 68.195570, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.823339, lng: 68.175550, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.853331, lng: 68.175520, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
    { id: Math.random().toString(36).substring(7), lat:38.843331, lng: 68.172570, comment: "UNDP ffff", photoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg" },
];

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
        }
    }

    render() {
        const markers = eventsFromApi.map((event) => {
            const { lng, lat, comment } = event;

            return (
                <Marker
                    key={event.id}
                    name={"fefe"}
                    position={{ lat, lng }}
                    onClick={this.onMarkerClick}
                >
                    {(this.state.showingInfoWindow &&
                        this.state.selectedLng == event.lng &&
                        this.state.selectedLat == event.lat
                    ) &&
                    <InfoWindow
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

        const defaultZoomLat = this.props.selectedLocation && this.props.selectedLocation.lat;
        const defaultZoomLng = this.props.selectedLocation && this.props.selectedLocation.lng;
        const MyMapComponent = withScriptjs(withGoogleMap((props) =>
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: defaultZoomLat ? defaultZoomLat : 38.559547, lng: defaultZoomLng ? defaultZoomLng : 68.757950 }}
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