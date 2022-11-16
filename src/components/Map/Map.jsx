import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab/Rating'
import useStyles from './styles'
import { Eco } from '@material-ui/icons'

const Map = ({setCoordinates, setBounds, coordinates, places, setChildClicked}) => {
  const classes = useStyles()
  const isDesktop = useMediaQuery('(min-width:600px)')
  const coord = {lat: 51.55066742, lng: -0.149051}
  // replace for coordinates only having api with higher request availability
  const avatar = 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'

  return (
    <h1 className={classes.mapContainer}>
      <GoogleMapReact
          bootstrapURLKeys={{key:'AIzaSyBdAW7JEuGU68SgOi0XRUtdWEDIROm0PHM'}}
          defaultCenter={coord}
          center={coord}
          defaultZoom={14}
          margin={[50,50,50,50]}
          options={''}
          onChange={(e) => { 
            setCoordinates({lat: e.center.lat, lng: e.center.lng}) 
            setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw}) }
          }
          onChildClick={(child) => {setChildClicked(child)}}
      >
        {places?.map((place, index) => (
          <div 
            className={classes.markerContainer} 
            lat={Number(place.latitude)} 
            lng={Number(place.longitude)}
            key={index}>
              {!isDesktop ? (
                <LocationOutlinedIcon color='primary' fontSize='large'/>
              ):(
                <Paper elevation={3} className={classes.paper}>
                    <Typography className={classes.tipography} variant='subtitle2' gutterBottom>
                      {place.name}
                    </Typography>
                    <img 
                      className={classes.pointer}
                      src={place.photo ? place.photo.images.large.url : avatar }
                      alt={place.name}
                    />
                    <Rating size='small' value={Number(place.rating)} readOnly/>
                </Paper>
              )}  
          </div>
        ))}
        
      </GoogleMapReact>  
    </h1>
  )
}

export default Map