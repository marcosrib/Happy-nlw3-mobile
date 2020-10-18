import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import mapMarker from '../images/mapicon.png';

const OrphanagesMap: React.FC = () => {
const navigation = useNavigation();

  
  function handleNavigatToOrphanageDetails() {
    navigation.navigate('OrphanageDetails')
  }

  return (
    <View style={styles.container}>
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={{
        latitude: -23.499025,
        longitude: -46.7962413,
        latitudeDelta: 0.008,
        longitudeDelta: 0.008
      }} >
      <Marker
        icon={mapMarker}
        calloutAnchor={{
          x: 2.7,
          y: 0.8
        }}
        coordinate={{
          latitude: -23.499025,
          longitude: -46.7962413,
        }}
      >
        <Callout tooltip onPress={handleNavigatToOrphanageDetails}>
          <View style={styles.calloutContainer}>
            <Text style={styles.calloutText}>Lar da meninsa</Text>
          </View>
        </Callout>
      </Marker>
    </MapView>
    <View style={styles.footer}>
      <Text style={styles.footerText}>2 orfanatos encontrados</Text>
      <TouchableOpacity style={styles.createOrphanageButton}>
        <Feather name="plus" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  </View>
  );
}

export default OrphanagesMap;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  calloutContainer: {
    width: 160,
    height: 44,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',

  },
  calloutText: {
    color: '#0089a5',
    fontSize: 14,
    fontFamily: 'Nunito_700Bold'
  },
  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 42,

    backgroundColor: '#fff',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',

    elevation: 3,
  },

  footerText: {
    color: '#8fa7b3',
    fontFamily: 'Nunito_700Bold'
  },
  createOrphanageButton: {
    width: 56,
    height: 56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center'
  }

});