import { useEffect, useState } from "react";
import { StyleSheet, Text, View, StatusBar, Image, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function App() {
  const [myLocal, setMyLocal] = useState(null);

  useEffect(() => {
    async function getLocal() {
      const { status } = Location.requestForegroundPermissionsAsync();

      // if (status !== "granted") {
      //   Alert.alert("pode não", "é crime");
      //   return;
      // }
      let currentLocal = await Location.getCurrentPositionAsync({});
      setMyLocal(currentLocal);
    }
    getLocal();
  }, []);

  const regiaoInicial = {
    latitude: -23.52618,
    longitude: -46.54027,
    latitudeDelta: 0.0222,
    longitudeDelta: 0.00121,
  };

  const [local, setLocal] = useState();

  const newLocal = (event) => {
    setLocal({
      ...local,
      latitude: myLocal.coords.latitude,
      longitude: myLocal.coords.longitude,
    });
    console.log(myLocal);
  };
  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <MapView
          onPress={newLocal}
          style={styles.map}
          mapType="standard"
          region={local ?? regiaoInicial}
        >
          {local && (
            <Marker
              coordinate={local}
              title="Aqui!"
              onPress={(e) => console.log(e.nativeEvent)}
            />
          )}
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
