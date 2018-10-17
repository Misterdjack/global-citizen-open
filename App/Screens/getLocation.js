import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Alert,
  ActivityIndicator,
  Button,
  TextInput,
  KeyboardAvoidingView,
  FlatList,
  TouchableOpacity,
  Image,
  AsyncStorage,
  Keyboard,
  TouchableWithoutFeedback,
  StatusBar
} from "react-native";
import { MapView, Location, Permissions } from "expo";
import { connect } from "react-redux";
import axios from "axios";
import { RkButton } from "react-native-ui-kitten";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import KeyboardSpacer from "react-native-keyboard-spacer";
import PropTypes from "prop-types";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

//client importing
import { geocodioKey, googlePlacesKey } from "../../config";
import { searchLegisLators, fetchingData } from "../../actions/searchActions";

class LocationPage extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Voting Address",
    headerStyle: {
      backgroundColor: "#0e1027"
      // paddingTop: Platform.OS == "android" ? 5 : 0
    },
    headerTitleStyle: {
      color: "#fff",
      alignItems: "center"
    },
    headerTintColor: "#fff",
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
        <Image source={require("../../images/menu.png")} />
      </TouchableOpacity>
    ),
    drawerLabel: "Search Representatives",
    drawerIcon: ({ tintColor }) => (
      <MaterialIcons
        name="people-outline"
        size={24}
        style={{ color: tintColor }}
      />
    )
    // <MaterialIcons
    //   name="account-balance"
    //   size={24}
    //   style={{ color: tintColor }}
    // />
  });

  constructor(props) {
    super(props);
    this.state = {
      region: {
        longitude: -98.57,
        latitude: 39.82,
        longitudeDelta: 39.4,
        latitudeDelta: 39.9
      },
      markers: [],
      location: false,
      voting: "",
      locationValue: undefined,
      locationLabel: false
    };
    this._getCurrentLocation = this._getCurrentLocation.bind(this);
    this._getStreetAddress = this._getStreetAddress.bind(this);
  }

  _getCurrentLocation = async () => {
    this.props.fetchingData(true);
    let { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== "granted") {
      alert("Permission to access location was denied");
    }

    let location = await Location.getCurrentPositionAsync({});
    let newLocation = {
      longitude: location.coords.longitude,
      latitude: location.coords.latitude
    };
    let newRegion = {
      longitude: location.coords.longitude,
      latitude: location.coords.latitude,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    };
    this.setState({
      location: newLocation,
      region: newRegion
    });
    let response = await this._getStreetAddress();
    this.props.fetchingData(false);

    this.setState({
      locationValue: response.data.results[0].formatted_address,
      locationLabel: response.data.results[0].formatted_address
    });

  };

  async _getStreetAddress() {
    try {
      // Geocodio as an alternative to google
      let response = await axios.get(
        `https://api.geocod.io/v1/reverse?q=${this.state.location.latitude},${this
          .state.location.longitude}&api_key=${geocodioKey}`
      );
      return response;
    } catch (e) {
      console.log(e);
      // Google location search
      let response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${
          this.state.location.latitude
        },${this.state.location.longitude}&sensor=true`
      );
      return response;
      // For testing purposes
      // curl https://maps.googleapis.com/maps/api/geocode/json?latlng=37.785863,-122.406497&sensor=true

    }

  }

  async _searchLegisLator() {
    if (!this.state.locationValue) {
      if (!this.state.location) {
        alert("Please Enter Your Voting Address");
      } else {
        this.props.fetchingData(true);
        let response = await this._getStreetAddress();
        this.props.searchLegisLators(
          this.props.navigation,
          response.data.results[0].formatted_address
        );
      }
    } else {
      this.props.fetchingData(true);
      this.props.searchLegisLators(
        this.props.navigation,
        this.state.locationValue
      );
      Keyboard.dismiss();
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <StatusBar barStyle="light-content" />
          <MapView region={this.state.region} style={{ flex: 0.6 }}>
            {this.state.location ? (
              <MapView.Marker
                coordinate={this.state.location}
                draggable
                onDragEnd={e =>
                  this.setState({ location: e.nativeEvent.coordinate })
                }
              />
            ) : null}
          </MapView>

          <View style={styles.buttonContainer}>
            <View
              style={{
                width: 200,
                alignSelf: "center",
                alignItems: "center",
                marginBottom: 20,
                marginTop: 10
              }}
            >
              <RkButton
                style={[styles.button]}
                onPress={() => this._getCurrentLocation()}
                title="Use Current Location"
                color="#ed2024"
              >
                Use Current Location
              </RkButton>
            </View>

            <Text style={{ marginBottom: 10 }}>Or</Text>
            {/* <GooglePlacesAutocomplete
            placeholder="Voting address"
            minLength={2}
            autoFocus={false}
            returnKeyType="search"
            fetchDetails={true}
            renderDescription={row => row.description} // custom description render
            onPress={(value, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(value);
              console.log(details);
            }}
            getDefaultValue={() => {
              return ""; // text input default value
            }}
            query={{
              // available options: https://developers.google.com/places/web-service/autocomplete
              key: "googlePlacesKey",
              language: "en" // language of the results
              // types: '(cities)', // default: 'geocode'
            }}
            styles={{
              textInputContainer: {
                height: 40,
                width: 300
              },
              predefinedPlacesDescription: {
                color: "#1faadb"
              }
            }}
            currentLocation={false}
            nearbyPlacesAPI="GooglePlacesSearch"
            // Custom methods
            value={this.state.locationValue}
            onChangeText={text => this.setState({ locationValue: text })}
            onSubmitEditing={this._searchLegisLator.bind(this)}
          /> */}

            <TextInput
              style={{ height: 40, width: 300 }}
              placeholder="Voting address"
              placeholderTextColor="#0e1027"
              returnKeyType="go"
              value={this.state.locationValue}
              onChangeText={text => this.setState({ locationValue: text })}
              onSubmitEditing={this._searchLegisLator.bind(this)}
            />
          </View>
          <View style={[styles.searchPosition]}>
            <RkButton
              style={[styles.button]}
              onPress={this._searchLegisLator.bind(this)}
              title="Search"
              color="#ed2024"
            >
              Search
            </RkButton>
          </View>
          {this.props.search.isFetching ? (
            <ActivityIndicator
              size="large"
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
              }}
            />
          ) : null}
          <KeyboardSpacer />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    borderWidth: 1,
    borderColor: "#fff",
    paddingTop: 13,
    paddingBottom: 13,
    width: 200,
    backgroundColor: "#ed2024"
  },
  whiteFont: {
    color: "#fff"
  },
  centerText: {
    textAlign: "center"
  },
  font15: {
    fontSize: 15
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center"
  },
  searchPosition: {
    position: "absolute",
    bottom: 10,
    right: 10
  },
  buttonSearch: {
    borderWidth: 1,
    borderColor: "#fff",
    paddingTop: 13,
    paddingBottom: 13,
    width: 100,
    backgroundColor: "#ed2024"
  },
  locationName: {
    padding: 10
  }
});
const mapStateToProps = state => {
  return {
    search: state.search
  };
};
export default connect(mapStateToProps, { searchLegisLators, fetchingData })(
  LocationPage
);
