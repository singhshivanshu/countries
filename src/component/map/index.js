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
        bootstrapURLKeys={{ key: "AIzaSyDoasDEUrbR9Vo_HBYliKugFg0mv8DVJB0"}}
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
