import React, { useState, useEffect } from "react"
import {Header, List, Map} from './components'
import { CssBaseline, Grid } from "@material-ui/core"
import { getPlacesData } from "./api"

const App = () => {

    const [rating, setRating] = useState('')
    const [places, setPlaces] = useState([])
    const [bounds, setBounds] = useState({})
    const [isLoading, setLoading] = useState(false)
    const [type, setType] = useState('restaurants')
    const [childClicked, setChildClicked] = useState(null)
    const [filteredPlaces, setFilteredPlaces] = useState([])
    const [coordinates, setCoordinates] = useState({lat: 51.55066742, lng: -0.149051})

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude} }) => {
            setCoordinates({lat: latitude, lng: longitude})})
    }, [])

    useEffect(() => {
        const filteredPlaces = places.filter((place) => place.rating > rating)
        setFilteredPlaces(filteredPlaces)
    }, [rating])

    useEffect(() => {
        setLoading(true)
        getPlacesData(type, bounds?.sw, bounds?.ne).then((data) => { 
            setPlaces(data); setLoading(false); setFilteredPlaces([]) })
    }, [type, coordinates, bounds])

    return(
        <>
        <CssBaseline />
        <Header />
        <Grid container spacing={3} style={ { width: '100%' } }>
            <Grid item xs={12} md={4}>
                <List 
                    places={places}
                    childClicked={childClicked}
                    isLoading={isLoading}
                    type={type}
                    setType={setType}
                    rating={rating}
                    setRating={setRating}
                    />
                
            </Grid>
            <Grid item xs={12} md={8}>
                <Map setCoordinates={setCoordinates}
                     setBounds={setBounds}
                     coordinates={coordinates}
                     places={filteredPlaces.length ? filteredPlaces : places}
                     setChildClicked={setChildClicked}
                />
            </Grid>
        </Grid>
        </>
    )
}

export default App