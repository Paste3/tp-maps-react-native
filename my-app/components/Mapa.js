import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Ubicacion from './Ubicacion';
import Lugares from "./Lugares"
import { Marker } from 'react-native-maps';

export default function Mapa() {
    return (
        <>
            <View style={styles.container}>
                <MapView style={styles.map}>
                    <Ubicacion></Ubicacion>
                    <>
                    // Traer los marcadores de las ubicaciones puestas en Lugares.js
                        {
                            Lugares.map(
                                (i) => (
                                    <>
                                        <Marker
                                            coordinate={{ latitude: i.latitud, longitude: i.longitud }}
                                            title={i.nombre}
                                        ></Marker>
                                    </>
                                )
                            )
                        }
                    </>
                </MapView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});