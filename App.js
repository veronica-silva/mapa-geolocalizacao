import { StyleSheet, Text, View, StatusBar } from "react-native";
import MapView from "react-native-maps";

export default function App() {
  const regiaoInicial = {
    latitude: -23.52618,
    longitude: -46.54027,
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
          userInterfaceStyle="dark"
          maxZoomLevel={18}
          minZoomLevel={15}
        />
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
