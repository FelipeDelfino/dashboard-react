import { Paper, Typography } from "@mui/material";
import Link from '@mui/material/Link';

import GoogleMapReact from 'google-map-react';
import { Container } from "@mui/system";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Map() {
  const defaultProps = {
    center: {
      lat: -23.5489,
      lng: -46.6388
    },
    zoom: 11
  };

  return (
    <>
      <Container maxWidth="xl" sx={{ mt: 6, mb: 4 }}>
        <Paper sx={{
          p: 2,
          height: '85vh',
          width: '100%',

        }}>

          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            {/* <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        /> */}
          </GoogleMapReact>
        </Paper>
      </Container>
      <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 4 }}>
        {'Copyright © '}
        <Link color="inherit" href="/">
          Felipe Delfino
        </Link>{' '}
        {new Date().getFullYear()}.
      </Typography>
    </>
  );
}




export default Map