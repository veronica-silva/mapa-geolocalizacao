import { StyleSheet, Text, View, StatusBar } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function App() {
  const regiaoInicial = {
    latitude: -23.52618,
    longitude: -46.54027,
    latitudeDelta: 0.0222,
    longitudeDelta: 0.00121,
  };

  const localizacao = {
    latitude: -23.533399562155157,
    longitude: -46.542586864417835,
    latitudeDelta: 0.0222,
    longitudeDelta: 0.00121,
  };
  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={regiaoInicial}
          liteMode={false}
          mapType="hybrid"
          userInterfaceStyle="light"
        >
          <Marker
            draggable
            coordinate={localizacao}
            title="Aqui!"
            onPress={(event) => {
              console.log(event.nativeEvent);
            }}
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
