import React, { useState, useEffect } from "react"
import {Header, List, Map} from './components'
import { CssBaseline, Grid } from "@material-ui/core"
import { getPlacesData } from "./api"

const App = () => {

    const [places, setPlaces] = useState([])
    const [bounds, setBounds] = useState({})
    const [loading, setLoading] = useState(false)
    const [childClicked, setChildClicked] = useState(null)
    const [coordinates, setCoordinates] = useState({lat: 51.55066742, lng: -0.149051})

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude} }) => {
            setCoordinates({lat: latitude, lng: longitude})})
    }, [])

    useEffect(() => {
        setLoading(true)
        getPlacesData(bounds?.sw, bounds?.ne).then((data) => { 
            setPlaces(data); setLoading(false) })
    }, [coordinates, bounds])

    return(
        <>
        <CssBaseline />
        <Header />
        <Grid container spacing={3} style={ { width: '100%' } }>
            <Grid item xs={12} md={4}>
                <List 
                    places={places}
                    childClicked={childClicked}
                    loading={loading}
                    />
                
            </Grid>
            <Grid item xs={12} md={8}>
                <Map setCoordinates={setCoordinates}
                     setBounds={setBounds}
                     coordinates={coordinates}
                     places={places}
                     setChildClicked={setChildClicked}
                />
            </Grid>
        </Grid>
        </>
    )
}

export default App