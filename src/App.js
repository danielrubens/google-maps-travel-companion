import React, { useState, useEffect } from "react"
import {Header, List, Map} from './components'
import { CssBaseline, Grid } from "@material-ui/core"
import { getPlacesData } from "./api"

const App = () => {

    const [rating, setRating] = useState('')
    const [type, setType] = useState('restaurants')
    
    const [bounds, setBounds] = useState({})
    const [coordinates, setCoordinates] = useState({})
    
    const [places, setPlaces] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [childClicked, setChildClicked] = useState(null)
    const [filteredPlaces, setFilteredPlaces] = useState([])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude} }) => {
            setCoordinates({lat: latitude, lng: longitude})})
    }, [])

    useEffect(() => {
        const filteredPlaces = places.filter((place) => place.rating > rating)
        setFilteredPlaces(filteredPlaces)
    }, [rating])

    useEffect(() => {
        if(bounds.sw && bounds.ne){
        setLoading(true)
        getPlacesData(type, bounds?.sw, bounds?.ne).then((data) => { 
            setPlaces(data.filter((place) =>  place.name && place.num_reviews > 0)); 
            setLoading(false); setFilteredPlaces([]) 
        })
    }}, [type, bounds])

    return(
        <>
        <CssBaseline />
        <Header setCoordinates={setCoordinates}/>
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