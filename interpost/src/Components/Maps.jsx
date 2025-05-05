import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix marker icon path for React
L.Marker.prototype.options.icon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

const US = L.latLng(40.7128, -74.0060);     // New York, USA
const Ghana = L.latLng(5.6037, -0.1870);    // Accra, Ghana
const midPoint = L.latLng(
  (US.lat + Ghana.lat) / 2,
  (US.lng + Ghana.lng) / 2
);
const distance = US.distanceTo(Ghana); // meters

export  const MyMap = () => {
  return (
    <MapContainer center={midPoint} zoom={2} style={{ height: '200px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="2G0 Flight Tracking Map"
      />
      <Marker position={US}>
        <Popup>
         2GO’s Origin Office
        </Popup>
      </Marker>
      <Marker position={Ghana}>
      <Popup>
        Flight Destination: Ghana
        </Popup>
      </Marker>
      <Polyline positions={[US, Ghana]} color="blue" />
      <Marker position={midPoint}>
        <Popup>
         Airplane Traveling Distance {(distance / 1000).toFixed(2)} km
        </Popup>
      </Marker>
    </MapContainer>
  );
};


