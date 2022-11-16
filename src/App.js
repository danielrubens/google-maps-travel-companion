import React, { useState, useEffect } from "react"
import {Header, List, Map} from './components'
import { CssBaseline, Grid } from "@material-ui/core"
import { getPlacesData } from "./api"

const App = () => {

    const [places, setPlaces] = useState([])
    const [coordinates, setCoordinates] = useState({lat: 51.55066742, lng: -0.149051})
    const [bounds, setBounds] = useState({})

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude} }) => {
            setCoordinates({lat: latitude, lng: longitude})})
    }, [])

    useEffect(() => {
        console.log(bounds?.sw, bounds?.ne)
        getPlacesData(bounds?.sw, bounds?.ne).then((data) => { setPlaces(data) })
    }, [coordinates, bounds])

    return(
        <>
        <CssBaseline />
        <Header />
        <Grid container spacing={3} style={ { width: '100%' } }>
            <Grid item xs={12} md={4}>
                <List places={places}/>
            </Grid>
            <Grid item xs={12} md={8}>
                <Map setCoordinates={setCoordinates}
                     setBounds={setBounds}
                     coordinates={coordinates}
                />
            </Grid>
        </Grid>
        </>
    )
}

export default App