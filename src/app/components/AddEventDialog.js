import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import {Button, CircularProgress} from "@material-ui/core";
import { Camera } from "@material-ui/icons";
import CheckIcon from '@material-ui/icons/Check';
import DialogActions from "@material-ui/core/DialogActions";
import Axios from "axios";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import {compress, compressAccurately} from 'image-conversion';

class AddEventDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            district: "Somoni",
            comment: null,
            lat: null,
            lng: null,
            photoLoaded: false,
            selectOpen: false,
            photo: null,
            errorToasterOpen: false,
            successToasterOpen: false,
            loading: false
        };

        this.handleCameraChange = this.handleCameraChange.bind(this);
        this.handleLocation = this.handleLocation.bind(this);
        this.handleSendClick = this.handleSendClick.bind(this);
    }

    render() {
        return (
            <Dialog open={this.props.open} onClose={this.props.handleAddEventClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Что-то портит вашу экологию?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Проявите социальную ответственность - сфотографируйте и отправьте нам.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Комментарий"
                        type="text"
                        fullWidth
                        multiline
                        onChange={this.handleCommentChange}
                    />

                    <Grid container style={{ marginTop: "5px" }}>
                        <Grid item xs={12} sm={6} md={6}>
                            <InputLabel >Фотография</InputLabel>
                            <input type="file"
                                accept="image/jpg,image/png/image/gif"
                                capture="camera"
                                id={"camera-photo"}
                                style={{ display: "none", marginTop: "2px" }}
                                ref={cameraFile => this.cameraFile = cameraFile}
                                onChange={this.handleCameraChange} />
                            <Button
                                style={{ display: this.state.photoLoaded && "none", }}
                                variant="contained"
                                color="primary"
                                size="small"
                                onClick={() => this.cameraFile.click()}
                                startIcon={<Camera />}
                            >
                                Сфотографировать
                            </Button>
                            <Button
                                style={{ display: !this.state.photoLoaded && "none" }}
                                variant="contained"
                                color="primary"
                                size="small"
                                startIcon={<CheckIcon />}
                            >
                                Загружено
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} className="region-grid">
                            <InputLabel id="demo-controlled-open-select-label" style={{ marginRight: "37px" }}>Район</InputLabel>
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={this.state.selectOpen}
                                onClose={this.handleSelectClose}
                                onOpen={this.handleSelectOpen}
                                value={this.state.district}
                                onChange={this.handleSelectChange}
                            >
                                <MenuItem value={"Sino"}>Сино</MenuItem>
                                <MenuItem value={"Firdavsi"}>Фирдавси</MenuItem>
                                <MenuItem value={"Somoni"}>Сомони</MenuItem>
                                <MenuItem value={"Shohmansur"}>Шохмансур</MenuItem>
                            </Select>
                        </Grid>
                    </Grid>

                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.onClose} color="primary">
                        Отмена
                    </Button>
                    {!this.state.loading ?
                        <Button onClick={this.handleSendClick} color="primary">
                            Отправить
                        </Button>
                        :
                        <CircularProgress size={14} />
                    }

                </DialogActions>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.errorToasterOpen}
                    autoHideDuration={6000}
                    onClose={this.handleErrorToasterCLose}
                    message="Whoops..."
                    action={
                        <React.Fragment>
                            <Button color="secondary" size="small" onClick={this.handleErrorToasterCLose}>
                                Отменить
                            </Button>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleErrorToasterCLose}>
                                Ошибка!
                            </IconButton>
                        </React.Fragment>
                    }
                />
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.successToasterOpen}
                    autoHideDuration={6000}
                    onClose={this.handleSucessToasterCLose}
                    message="Success"
                    action={
                        <React.Fragment>
                            <Button color="secondary" size="small" onClick={this.handleSuccessToasterCLose}>
                                UNDO
                            </Button>
                            <IconButton size="small" aria-label="close" color="primary" onClick={this.handleSuccessToasterCLose}>
                                Success
                            </IconButton>
                        </React.Fragment>
                    }
                />
            </Dialog>
        )
    }

    handleErrorToasterCLose = (event, reason) => {
        this.setState({
            errorToasterOpen: false
        })
    };


    handleCameraChange(event) {
        const fileName = event.target.files[0].name;
       compressAccurately(event.target.files[0], 80).then(res => {
           res.name = fileName;
            this.setState({
                photo: res
            }, () => {
                this.setState({
                    photoLoaded: true
                })
            })
        });
        // const photo = event.target.files[0];

    }

    handleSendClick() {
        if (!navigator.geolocation.getCurrentPosition(this.handleLocation)) {
            console.log("Пожалуйста, предоставьте свои геоданные ")
            // this.setState({
            //     errorToasterOpen: true
            // })
        };
    }

    handleLocation(position) {
        this.setState({
            loading: true,
            lng: position.coords.longitude,
            lat: position.coords.latitude
        }, () => {
            this.send()
        })
    }


    send() {
        if (this.state.comment && this.state.district && this.state.photo) {
            const formData = new FormData();
            formData.append("file", this.state.photo, this.state.photo.name);
            formData.append("long", this.state.lng);
            formData.append("lat", this.state.lat);
            formData.append("comment", this.state.comment);
            formData.append("district", this.state.district);

            // Axios.post("https://cleancity.foodstan.tj/api/create_app", formData).then(resp => {
            Axios.post("http://cleancity.test/api/create_app", formData).then(resp => {
                this.setState({
                    successToasterOpen: true
                }, () => {
                    window.location.reload();
                })
            }).catch(err => {
                console.log(err);
                this.setState({
                    loading: false,
                    errorToasterOpen: true
                })
            })
        }
    }

    handleCommentChange = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    handleSelectClose = () => {
        this.setState({
            selectOpen: false
        })
    }

    handleSelectOpen = () => {
        this.setState({
            selectOpen: true
        })
    }

    handleSelectChange = (event) => {
        this.setState({
            district: event.target.value
        })
    }

    handleSuccessToasterCLose = (event) => {
        this.setState({
            successToasterOpen: false
        })
    }
}

export default AddEventDialog;