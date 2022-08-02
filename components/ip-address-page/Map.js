import React from "react";
import { TileLayer, Marker, Popup, MapContainer, useMap } from "react-leaflet";

// helper component to make map recenter on new location if user enter new ip address
// pass lat and lng from new location data
function ChangeMapView({ lat, lng }) {
  const map = useMap();
  map.setView([lat, lng], map.getZoom());

  return null;
}

const Map = (props) => {
  // destructuring data of location from ipAddressLookup to show on map
  const { lat, lng, region } = props.location;

  return (
    <MapContainer center={[lat, lng]} zoom={15} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ChangeMapView lat={lat} lng={lng} />
      <Marker position={[lat, lng]}>
        <Popup>{region}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
