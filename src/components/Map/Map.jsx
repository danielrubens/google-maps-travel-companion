import React from 'react'
import GoogleMapReact from 'google-map-react'
import {Paper, Typography, useMediaQuery} from '@material-ui/core'
import LocationOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab'
import useStyles from './styles'

const Map = () => {
  const classes = useStyles()
  const isMobile = useMediaQuery('(min-width:600px)')
  const coordinates = {lat:-5.1863785, lng: -43.0650}
  return (
    <h1 className={classes.mapContainer}>
      <GoogleMapReact
          bootstrapURLKeys={{key:'AIzaSyBdAW7JEuGU68SgOi0XRUtdWEDIROm0PHM'}}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={7}
          margin={[50,50,50,50]}
          options={''}
          onChange={''}
          onChildClick={''}
      >
        
      </GoogleMapReact>  
    </h1>
  )
}

export default Map