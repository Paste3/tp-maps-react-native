import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function Ubicacion() {
  const [location, setLocation] = useState(null);
  const [error, setErrorMsg] = useState("")
  const [latitud, setLatitud] = useState(0);
  const [longitud, setLongitud] = useState(0);
  
  
  useEffect(() => {
    (async () => {
      // Pedir permiso de ubicacion al celular
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      // Traer la ubicacion actual
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      JSON.stringify(location);
      console.log(location.coords.latitude)
      console.log(location.coords.longitude)
      setLatitud(location.coords.latitude);
      setLongitud(location.coords.longitude);
    })();
  }, []);



  return (
    <>
    // devolver la ubicacion actual
      <Marker coordinate={{
        latitude: latitud,
        longitude: longitud
      }}
        title="Ubicacion actual🥱😋">
        <View style={styles.circle}></View>
      </Marker>
    </>
  );
}
const styles = StyleSheet.create({
circle: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    backgroundColor: 'blue',
    borderWidth: 2,
    borderColor: "gray"
}
});