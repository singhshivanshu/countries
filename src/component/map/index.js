import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function CountryMap(props) {
  const { lat, lng, name } = props;
  console.log(lat);
  console.log(process.env)
  return (
    <div style={{width: "350px", height: "230px"}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY}}
        defaultCenter={{ lat: lat, lng: lng }}
        defaultZoom={1}
      >
        <AnyReactComponent
        lat={lat}
        lng = {lng}
        text= {name}
        />
      </GoogleMapReact>
    </div>
  );
}
export default CountryMap;
