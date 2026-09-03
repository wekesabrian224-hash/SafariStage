import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import L from "leaflet";

import UserLocation from "./UserLocation";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",

  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",

  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

function StageMap({ stages }) {
  return (
    <div className="map-container">
      <MapContainer
        center={[-1.286, 36.817]}
        zoom={6}
        scrollWheelZoom={true}
        className="stage-map"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <UserLocation />

        {stages.map((stage) => (
          <Marker
            key={stage.id}
            position={[stage.coordinates.latitude, stage.coordinates.longitude]}
          >
            <Popup>
              <h3>{stage.name}</h3>

              <p>📍 {stage.landmark}</p>

              <p>🚌 {stage.destinations.join(", ")}</p>

              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${stage.coordinates.latitude},${stage.coordinates.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default StageMap;
