import React from 'react';
import './App.css';
import Map from "./app/components/Map";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from "./app/components/Header";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


class App extends React.Component{
    constructor(props) {
        super();
    }
    render() {
        return (
            <div>
                <Header/>
                <Grid container>
                    <Grid item xs={4} md={4} xl={4}>

                    </Grid>
                    <Grid item xs={8} md={8} xl={8}>
                        <Map/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default App;
