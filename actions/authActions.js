import { IS_LOGGEDIN, LOGIN_FAILED } from "./types";
import Expo from "expo";
import { NavigationActions } from "react-navigation";
import PropTypes from "prop-types";

export const doFacebookLogin = navigation => async dispatch => {
  const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
    "1706397482755324",
    // "300162567100466",
    {
      permissions: ["public_profile"]
    }
  );
  //   if (type === 'success') {
  //   // Get the user's name using Facebook's Graph API
  //   const response = await fetch(
  //     `https://graph.facebook.com/me?access_token=${token}`);
  //   Alert.alert(
  //     'Logged in!',
  //     `Hi ${(await response.json()).name}!`,
  //   );
  // }
  if (type === "success") {
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}`
    );
    let res = await response.json();
    let user = {
      name: res.name
    };
    dispatch({ type: IS_LOGGEDIN, data: user });
    navigation.dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "Location" })]
      })
    );
  } else {
    dispatch({ type: LOGIN_FAILED });
  }
};

export const doGoogleLogin = navigation => async dispatch => {
  const result = await Expo.Google.logInAsync({
    androidClientId:
      "234698461767-61gpnc02kjscd0jaac4mn5uacbq7ba21.apps.googleusercontent.com",
    iosClientId:
      "234698461767-qpf1pjvomukhi1rfk1dks4qckobqe9gg.apps.googleusercontent.com",
    androidStandaloneAppClientId:
      "234698461767-tadtn0jdvpcttlgh5vo4qqg7724g2q98.apps.googleusercontent.com",
    iosStandaloneAppClientId:
      "234698461767-rovmf0bfl94qjehd5h6b42f8jvhaob95.apps.googleusercontent.com",
    scopes: ["profile", "email"]
  });
  let user = {
    name: result.user.name
  };
  if (result.type === "success") {
    dispatch({ type: IS_LOGGEDIN, data: user });
    navigation.dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: "Location"
          })
        ]
      })
    );
  } else {
    dispatch({ type: LOGIN_FAILED });
  }
};

export const loginWithEmail = (navigation, data) => dispatch => {
  dispatch({ type: IS_LOGGEDIN, data });
  navigation.dispatch(
    NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: "Location"
        })
      ]
    })
  );
};
