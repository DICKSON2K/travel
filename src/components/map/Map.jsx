import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/lab/Rating';




const Map = () => {


    const isMobile =useMediaQuery ('(min-width:600px)');
    const coordinates = { lat: 0, lng: 0}
    return (
      <div>
        <GoogleMapReact
            bootstrapURLKeys ={{ key: ''}}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[ 50, 50, 50, 50]}
            options={''}
            onChange={''}
            onChildClick={''}
            >
        </GoogleMapReact>
      </div>

    );
};

export default Map;