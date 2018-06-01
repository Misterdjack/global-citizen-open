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
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";
import Communications from "react-native-communications";
import { RkButton, RkCard } from "react-native-ui-kitten";

class Legislators extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Representatives",
    headerStyle: {
      backgroundColor: "#0e1027"
    },
    headerTitleStyle: {
      color: "#fff"
    },
    headerTintColor: "#fff"
  });

  constructor(props) {
    super(props);
    this.state = { collapsed: false };
    this._renderLegislator = this._renderLegislator.bind(this);
  }

  _renderSenate(data) {
    return data.map((item, index) => {
      return this._renderLegislator(item, index, "senate");
    });
  }

  _renderLegislator(item, index, type) {
    return (
      <RkCard type="shadowed" key={index} style={[styles.itemContainer]}>
        <View style={[styles.item]}>
          {item.photoUrl ? (
            <Image
              source={{ uri: item.photoUrl }}
              style={{ width: 100, height: 100, resizeMode: "cover" }}
            />
          ) : (
            <View
              style={{ width: 100, height: 100, backgroundColor: "#df1f36" }}
            />
          )}

          <View
            style={{
              marginLeft: 10,
              padding: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flex: 1
            }}
          >
            <View style={{ width: 120, marginRight: 10 }}>
              <Text
                style={{ color: "#000", marginBottom: 20, fontWeight: "bold" }}
              >
                {item.name}
              </Text>
              <Text>{item.party}</Text>
              <Text>{item.phones[0]}</Text>
            </View>
            <View style={{ display: "flex", justifyContent: "flex-end" }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#0e1027",
                  marginBottom: 5,
                  padding: 5,
                  width: 50
                }}
                onPress={() => Communications.phonecall(item.phones[0], true)}
              >
                <Text style={{ color: "#fff", textAlign: "center" }}>Call</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#0e1027",
                  marginBottom: 5,
                  padding: 5,
                  width: 50
                }}
                onPress={() => Communications.web(item.urls[0])}
              >
                <Text style={{ color: "#fff", textAlign: "center" }}>Web</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={[styles.buttonGroup]}>
          <View style={[styles.buttonContainer]}>
            <RkButton
              style={[styles.buttonRed]}
              onPress={() => {
                this.props.navigation.navigate("Contributor", {
                  name: item.name
                });
              }}
              title="Top Contributors"
              color="#ed2024"
            >
              Top Contributors
            </RkButton>
            <View style={{ marginTop: 10 }}>
              <RkButton
                style={[styles.button]}
                onPress={() => {
                  this.props.navigation.navigate("RecentVotes", {
                    name: item.name,
                    type
                  });
                }}
                title="Recent Votes"
              >
                Recent Votes
              </RkButton>
            </View>
          </View>
          <View style={[styles.buttonContainer]}>
            <RkButton
              style={[styles.buttonRed]}
              onPress={() => {
                this.props.navigation.navigate("Industries", {
                  name: item.name
                });
              }}
              title="Top Industries"
              color="#ed2024"
            >
              Top Industries
            </RkButton>
            <View style={{ marginTop: 10 }}>
              <RkButton
                style={[styles.button]}
                onPress={() => {
                  this.props.navigation.navigate("RecentBills", {
                    name: item.name,
                    type
                  });
                }}
                title="Recent Bills"
              >
                Recent Bills
              </RkButton>
            </View>
          </View>
        </View>
      </RkCard>
    );
  }

  // _renderHouse(data) {
  //   return data.map((item, index) => {
  //     return this._renderLegislator(item, index, "house");
  //   });
  // }

  // _renderHouse(data) {
  //   try {
  //     return data.map((item, index) => {
  //       return this._renderLegislator(item, index, "house");
  //     });
  //   } catch (e) {}
  // }

  _renderHouse(data) {
    // const { navigate } = this.props.navigation;
    try {
      return data.map((item, index) => {
        return this._renderLegislator(item, index, "house");
      });
    } catch (e) {
      if (e) {
        Alert.alert("Please enter a more specific address");
      }
    }
  }

  render() {
    return (
      <View style={[styles.container]}>
        <ScrollView>
          <View style={{ marginBottom: 15 }}>
            <Text
              style={{ textAlign: "center", fontSize: 20, marginBottom: 10 }}
            >
              Senators
            </Text>
            {this._renderSenate(this.props.search.senateLegislators)}
          </View>
          <View>
            <Text
              style={{ textAlign: "center", fontSize: 20, marginBottom: 10 }}
            >
              Representatives
            </Text>
            {this._renderHouse(this.props.search.houseLegislators)}
          </View>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    search: state.search
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5
  },
  item: {
    flexDirection: "row",
    backgroundColor: "#fff"
  },
  buttonGroup: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderColor: "#e9ebee",
    padding: 5
  },
  buttonContainer: {
    flex: 1,
    padding: 5,
    alignItems: "center"
  },
  buttonRed: {
    width: 140,
    borderWidth: 1,
    borderColor: "#fff",
    padding: 10,
    backgroundColor: "#ed2024"
  },
  button: {
    width: 140,
    borderWidth: 1,
    borderColor: "#fff",
    padding: 10
  },
  itemContainer: {
    marginBottom: 30
  }
});
export default connect(mapStateToProps)(Legislators);
