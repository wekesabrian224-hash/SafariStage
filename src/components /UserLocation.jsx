import { useEffect, useState } from "react";

import { Marker, Popup, useMap } from "react-leaflet";

function UserLocation() {
  const [position, setPosition] = useState(null);

  const map = useMap();

  useEffect(() => {
    if (!navigator.geolocation) {
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (location) => {
        const userPosition = [
          location.coords.latitude,
          location.coords.longitude,
        ];

        setPosition(userPosition);

        map.setView(userPosition, 13);
      },
      (error) => {
        console.log(error.message);
      },
    );
  }, [map]);

  if (!position) {
    return null;
  }

  return (
    <Marker position={position}>
      <Popup>📍 You are here</Popup>
    </Marker>
  );
}

export default UserLocation;
