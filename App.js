import { useState } from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function App() {
  const regiaoInicial = {
    latitude: -23.52618,
    longitude: -46.54027,
    latitudeDelta: 0.0222,
    longitudeDelta: 0.00121,
  };

  const [local, setLocal] = useState({
    latitude: -23.52618,
    longitude: -46.54027,
    latitudeDelta: 0.0222,
    longitudeDelta: 0.00121,
  });

  const newLocal = (event) => {
    setLocal({
      ...local,
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
    });
    console.log(local);
  };
  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <MapView
          onPress={newLocal}
          style={styles.map}
          mapType="standard"
          initialRegion={regiaoInicial}
        >
          <Marker
            coordinate={local}
            title="Aqui!"
            onPress={(e) => console.log(e.nativeEvent)}
          />
        </MapView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
