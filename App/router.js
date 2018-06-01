import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView
} from "react-native";
import {
  StackNavigator,
  DrawerNavigator,
  DrawerItems,
  SafeAreaView
} from "react-navigation";
import Login from "@screens/Login";
import Location from "@screens/getLocation.js";
import Legislators from "@screens/legislators.js";
// import Issues from "@screens/issues.js";
import Concerns from "@screens/Concerns.js";
import Bills from "@screens/Bills.js";
import Contributor from "@screens/contributor.js";
import Industries from "@screens/industries.js";
import RecentVotes from "@screens/recentVotes.js";
import RecentBills from "@screens/recentBills";
import Communications from "react-native-communications";

const stackNav = StackNavigator(
  {
    Location: { screen: Location },
    Legislators: {
      screen: Legislators
    },
    Contributor: {
      screen: Contributor
    },
    Industries: {
      screen: Industries
    },
    RecentVotes: {
      screen: RecentVotes
    },
    RecentBills: {
      screen: RecentBills
    }
  },
  {
    headerMode: "float"
  }
);
// const IssuesNav   = StackNavigator({
//     Issues: {
//         screen: Issues
//     }
// });
const ConcernsNav = StackNavigator({
  Concerns: {
    screen: Concerns
  },
  Bills: {
    screen: Bills
  }
});

const drawer = DrawerNavigator(
  {
    Location: {
      screen: stackNav
    },
    Concerns: {
      screen: ConcernsNav
    }
    // ,
    // Issues: {
    //     screen: IssuesNav
    // }
  },
  {
    drawerWidth: 250,
    contentOptions: {
      activeBackgroundColor: "#fff",
      activeTintColor: "#df1f36",
      inactiveTintColor: "#fff",
      style: {
        backgroundColor: "#0e1027",
        flex: 1,
        paddingTop: 35
      }
    },
    contentComponent: props => (
      <SafeAreaView
        style={styles.container}
        forceInset={{ top: "always", horizontal: "never" }}
      >
        <ScrollView>
          <Image
            source={require("../assets/icons/logo.png")}
            resizeMode="contain"
            style={{ width: 250, height: 250 }}
          />
          <DrawerItems {...props} />
        </ScrollView>
        <TouchableOpacity
          style={{ width: 250, marginBottom: 15 }}
          onPress={() =>
            Communications.web(
              "http://173.255.198.182/uspatriotapp.com/public_html/privacystatement.html"
            )
          }
        >
          <Text style={{ color: "#fff", textAlign: "center", fontSize: 8 }}>
            Privacy Policy
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    ),
    headerMode: "float"
  }
);

const router = StackNavigator(
  {
    Login: {
      screen: Login
    },
    Location: {
      screen: drawer
    }
  },
  { headerMode: "none" }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0e1027"
  },
  menuItem: {
    flexDirection: "row"
  },
  menuItemText: {
    fontSize: 15,
    fontWeight: "300",
    margin: 15
  }
});

export default router;
