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
  TouchableOpacity
} from "react-native";
import Slider from "react-native-slider";
import { connect } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import PropTypes from "prop-types";

// action import
import { updateIssue } from "../../actions/sliderAction";
class Issues extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Issues",
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
    drawerIcon: ({ tintColor }) => (
      <MaterialCommunityIcons
        name="scale-balance"
        size={24}
        style={{ color: tintColor }}
      />
    )
  });

  constructor(props) {
    super(props);
    this.state = {
      domestic: 40,
      international: 50,
      social: 50,
      fiscal: 50,
      environment: 50
    };
  }

  render() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.hero]}>
          <Text style={[styles.heroButton, styles.whiteFont]}>PROGRESSIVE</Text>
          <Text style={[styles.heroButton, styles.whiteFont]}>
            CONSERVATIVE
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={[styles.title]}>DOMESTIC</Text>
          <Slider
            minimumValue={1}
            maximumValue={100}
            step={1}
            value={this.props.issues[0].value}
            onValueChange={value => {
              this.setState({ value });
            }}
            style={{ width: 280 }}
            onSlidingComplete={value => {
              this.props.updateIssue(0, value);
            }}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={[styles.title]}>INTERNATIONAL</Text>
          <Slider
            minimumValue={1}
            maximumValue={100}
            step={1}
            value={this.props.issues[1].value}
            onSlidingComplete={value => {
              this.props.updateIssue(1, value);
            }}
            style={{ width: 280 }}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={[styles.title]}>SOCIAL</Text>
          <Slider
            minimumValue={1}
            maximumValue={100}
            step={1}
            value={this.props.issues[2].value}
            onSlidingComplete={value => {
              this.props.updateIssue(2, value);
            }}
            style={{ width: 280 }}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={[styles.title]}>FISCAL</Text>
          <Slider
            minimumValue={1}
            maximumValue={100}
            step={1}
            value={this.props.issues[3].value}
            onSlidingComplete={value => {
              this.props.updateIssue(3, value);
            }}
            style={{ width: 280 }}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={[styles.title]}>ENVIRONMENT</Text>
          <Slider
            minimumValue={1}
            maximumValue={100}
            step={1}
            value={this.props.issues[4].value}
            onSlidingComplete={value => {
              this.props.updateIssue(4, value);
            }}
            style={{ width: 280 }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff"
  },
  hero: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  heroButton: {
    padding: 5,
    backgroundColor: "#ed2024"
  },
  whiteFont: {
    color: "#fff"
  }
});
const mapStateToProps = state => {
  return {
    issues: state.issues
  };
};
export default connect(mapStateToProps, { updateIssue })(Issues);
