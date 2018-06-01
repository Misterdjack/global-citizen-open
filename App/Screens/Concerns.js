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
  ScrollView,
  StatusBar
} from "react-native";
import CheckBox from "react-native-check-box";
import { connect } from "react-redux";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

//action import
import { updateSubject } from "../../actions/concernActions";

class Concerns extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Search Legislation",
    headerStyle: {
      backgroundColor: "#0e1027"
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
    drawerLabel: "Search Legislation",
    drawerIcon: ({ tintColor }) => (
      <MaterialIcons
        name="account-balance"
        size={24}
        style={{ color: tintColor }}
      />
    )
  });

  constructor(props) {
    super(props);
    this._renderCheckbox = this._renderCheckbox.bind(this);
  }

  _renderCheckbox() {
    return this.props.concerns.map((data, index) => (
      <CheckBox
        style={{ flex: 1, padding: 10 }}
        leftText={data.label}
        isChecked={data.checked}
        onClick={() => {
          this.props.updateSubject(index, !data.checked);
        }}
        key={index}
      />
    ));
  }

  render() {
    return (
      <ScrollView
        style={[styles.container]}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <StatusBar barStyle="light-content" />

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Bills")}
          style={[styles.button]}
        >
          <Text style={[styles.whiteText]}>Search Categories</Text>
        </TouchableOpacity>
        {this._renderCheckbox()}
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Bills")}
          style={[styles.button]}
        >
          <Text style={[styles.whiteText]}>Search Categories</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  button: {
    backgroundColor: "#df1f36",
    width: 200,
    marginTop: 20,
    padding: 10,
    alignSelf: "center"
  },
  whiteText: {
    color: "#ffffff",
    textAlign: "center"
  }
});
const mapStateToProps = state => {
  return {
    concerns: state.concerns
  };
};
export default connect(mapStateToProps, { updateSubject })(Concerns);
