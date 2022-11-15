import React from 'react'
import GoogleMapReact from 'google-map-react'
import {Paper, Typography, useMediaQuery} from '@material-ui/core'
import LocationOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab'
import useStyles from './styles'
import { Eco } from '@material-ui/icons'

const Map = ({setCoordinates, setBounds, coordinates}) => {
  const classes = useStyles()
  const isMobile = useMediaQuery('(min-width:600px)')
  // const coord = {lat:-5.1863785, lng: -43.0650}
  const coord = {lat: 51.55066742, lng: -0.149051}
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
          onChildClick={''}
      >
        
      </GoogleMapReact>  
    </h1>
  )
}

export default Map