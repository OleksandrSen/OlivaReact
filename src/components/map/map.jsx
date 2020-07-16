import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import googleMapStyles from './GoogleMapStyles';
import './map.scss';

export class Maps extends React.Component {
  render() {
    return (
      <div className='map'>
        <Map
          google={this.props.google}
          zoom={16}
          styles={this.props.mapStyle}
          initialCenter={{ lat: 49.58452204629314, lng: 34.558402793917836 }}
        >
          <Marker
            position={{ lat: 49.58452204629314, lng: 34.558402793917836 }}
          />
        </Map>
      </div>
    );
  }
}

Maps.defaultProps = googleMapStyles;

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDnosClODBNFfIodbt6_h5TGSuOPuDXJLo',
})(Maps);
