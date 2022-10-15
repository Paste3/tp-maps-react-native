import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { Marker } from 'react-native-maps';

export default function Ubicacion() {
  const [location, setLocation] = useState(null);
  const [latitud, setLatitud] = useState(0);
  const [longitud, setLongitud] = useState(0);
  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      JSON.stringify(location);
      setLatitud(location.coords.latitude);
      setLongitud(location.coords.longitude);
    })();
  }, []);



  return (
    <>
      <Marker coordinate={{
        latitude: latitud,
        longitude: longitud
      }}></Marker>
    </>
  );
}