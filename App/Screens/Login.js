import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Alert,
  AsyncStorage,
  ActivityIndicator,
  TextInput,
  Dimensions,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  StatusBar
} from "react-native";
import Expo from "expo";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";
import KeyboardSpacer from "react-native-keyboard-spacer";
import PropTypes from "prop-types";

import {
  doFacebookLogin,
  doGoogleLogin,
  loginWithEmail
} from "../../actions/authActions";

const { height, width } = Dimensions.get("window");
const { checkPropTypes } = PropTypes;

class Login extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  state = {
    isLoading: true,
    password: undefined,
    username: undefined
  };

  async componentDidMount() {
    setTimeout(() => {
      if (this.props.isLoggedin) {
        this.props.navigation.dispatch(
          NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: "Location" })]
          })
        );
      } else {
        this.setState({
          isLoading: false
        });
      }
    }, 10);
  }

  _loginWithFacebook() {
    this.props.doFacebookLogin(this.props.navigation);
  }

  _loginWithGoogle() {
    this.props.doGoogleLogin(this.props.navigation);
  }

  _loginWithEmail() {
    let data = {
      username: this.state.username,
      password: this.state.password
    };
    if (!data.username || !data.password) {
      alert("Please fill the details");
      return false;
    }
    this.props.loginWithEmail(this.props.navigation, data);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <StatusBar barStyle="light-content" />
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }} behavior="padding">
          <StatusBar barStyle="light-content" />

          <View style={[styles.container]}>
            <Image source={require("../../assets/icons/logo.png")} />
            <View style={[styles.loginForm]}>
              <TextInput
                style={[styles.input]}
                underlineColorAndroid={"transparent"}
                placeholder="Enter Username or Email"
                onChangeText={text => this.setState({ username: text })}
                value={this.state.username}
                placeholderTextColor="#fff"
              />
              <TextInput
                style={[styles.input]}
                underlineColorAndroid={"transparent"}
                placeholder="Enter Password"
                onChangeText={text => this.setState({ password: text })}
                value={this.state.password}
                placeholderTextColor="#fff"
                secureTextEntry={true}
              />
              <TouchableHighlight
                style={[styles.button, { alignSelf: "center" }]}
                activeOpacity={0.6}
                underlayColor="transparent"
                onPress={this._loginWithEmail.bind(this)}
              >
                <Text
                  style={[styles.whiteFont, styles.centerText, styles.font15]}
                >
                  Login or Sign Up
                </Text>
              </TouchableHighlight>
            </View>
            <TouchableHighlight
              style={[styles.button]}
              activeOpacity={0.6}
              onPress={this._loginWithFacebook.bind(this)}
              underlayColor="transparent"
            >
              <Text
                style={[styles.whiteFont, styles.centerText, styles.font15]}
              >
                Login With Facebook
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={[styles.button]}
              activeOpacity={0.6}
              onPress={this._loginWithGoogle.bind(this)}
              underlayColor="transparent"
            >
              <Text
                style={[styles.whiteFont, styles.centerText, styles.font15]}
              >
                Login With Google
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={[styles.button]}
              activeOpacity={0.6}
              onPress={() => {
                this.props.navigation.navigate("Location");
              }}
              underlayColor="transparent"
            >
              <Text
                style={[styles.whiteFont, styles.centerText, styles.font15]}
              >
                Continue As Guest
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const mapStateToProps = state => {
  return { isLoggedin: state.profile.isLoggedIn, user: state.profile.user };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0e1027",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    borderWidth: 1,
    borderColor: "#fff",
    paddingTop: 8,
    paddingBottom: 8,
    marginBottom: 10,
    width: 250
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
  input: {
    height: 30,
    borderColor: "#fff",
    borderBottomWidth: 1,
    marginBottom: 10,
    color: "#fff",
    width: 300
  },
  loginForm: {
    marginBottom: 0
  }
});

Login.propTypes = {
  navigation: PropTypes.object.isRequired
};
export default connect(mapStateToProps, {
  doFacebookLogin,
  doGoogleLogin,
  loginWithEmail
})(Login);
