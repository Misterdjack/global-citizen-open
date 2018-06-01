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
  Platform
} from "react-native";
import axios from "axios";
import { prorepublicaKey } from "../../config";
import { connect } from "react-redux";
import Communications from "react-native-communications";
import PropTypes from "prop-types";

// Patch from react-navigation v1.0.0-beta.26
import { SafeAreaView } from "react-navigation";
if (Platform.OS === "android") {
  SafeAreaView.setStatusBarHeight(0);
}

class Bills extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Bills",
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
    this.state = { loading: true, houseBills: [], senateBills: [] };
    this._renderHouseBills = this._renderHouseBills.bind(this);
    this._renderSenateBills = this._renderSenateBills.bind(this);
  }

  async componentDidMount() {
    const houseUrl =
      "https://api.propublica.org/congress/v1/115/house/bills/active.json";
    const housePassedUrl =
      "https://api.propublica.org/congress/v1/115/house/bills/passed.json";
    const senateUrl =
      "https://api.propublica.org/congress/v1/115/senate/bills/active.json";
    const senatePassedUrl =
      "https://api.propublica.org/congress/v1/115/senate/bills/passed.json";
    let houseResponse = await axios.get(houseUrl, {
      headers: { "X-API-Key": prorepublicaKey }
    });
    let senateResponse = await axios.get(senateUrl, {
      headers: { "X-API-Key": prorepublicaKey }
    });
    let housePassedResponse = await axios.get(housePassedUrl, {
      headers: { "X-API-Key": prorepublicaKey }
    });
    let senatePassedResponse = await axios.get(senatePassedUrl, {
      headers: { "X-API-Key": prorepublicaKey }
    });

    this.setState({
      houseBills: houseResponse.data.results[0].bills.concat(
        housePassedResponse.data.results[0].bills
      ),
      senateBills: senateResponse.data.results[0].bills.concat(
        senatePassedResponse.data.results[0].bills
      ),
      loading: false
    });
  }

  // Possible function to show bill status
  // const renderBillStatus = function (bill) {
  //     if (bill.house_passage) {
  //       return <Text style={styles.title}> Passed House </Text>;
  //     } else if (bill.senate_passage) {
  //       return <Text style={styles.title}> Passed Senate </Text>;
  //     } else if (bill.enacted) {
  //       return <Text style={styles.title}> Enacted </Text>;
  //     }
  //     return <Text style={styles.title}> Vetoed </Text>;
  //   }

  _renderHouseBills() {
    let selectedConcerns = this.props.houseSubject;
    let billCounts = 0;
    let data = [];
    if (selectedConcerns && selectedConcerns.length > 0) {
      data = this.state.houseBills.map((bill, index) => {
        for (let i = 0; i < selectedConcerns.length; i++) {
          if (selectedConcerns[i].includes(bill.primary_subject)) {
            billCounts = billCounts + 1;
            return (
              <View key={index} style={[styles.bill]}>
                <Text style={[styles.title]}>
                  {bill.primary_subject}: {bill.number} - {bill.title}
                </Text>
                <Text style={[styles.bill]}>
                  {"Sponsored by " +
                    bill.sponsor_title +
                    " " +
                    bill.sponsor_name +
                    ", " +
                    bill.sponsor_party +
                    "-" +
                    bill.sponsor_state}
                </Text>
                <Text style={[styles.bill]}>
                  {bill.committees.match(/[a-zA-Z" "]+/g)}
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#df1f36",
                    margin: 10,
                    padding: 5,
                    width: 150
                  }}
                  onPress={() => Communications.web(bill.congressdotgov_url)}
                >
                  <Text style={{ color: "#fff", textAlign: "center" }}>
                    More Info
                  </Text>
                </TouchableOpacity>
              </View>
            );
            break;
          }
        }
      });
      if (billCounts == 0) {
        return (
          <View style={[styles.bill]}>
            <Text style={[styles.title]}>
              No Recent Legislation Matched Your Selected Subjects
            </Text>
          </View>
        );
      } else {
        return data;
      }
    } else {
      return (
        <View style={[styles.bill]}>
          <Text style={[styles.title]}>
            No Recent Legislation Matched Your Selected Subjects
          </Text>
        </View>
      );
    }
  }

  _renderSenateBills() {
    let selectedConcerns = this.props.senateSubject;
    let billCounts = 0;
    let data = [];
    if (selectedConcerns && selectedConcerns.length > 0) {
      data = this.state.senateBills.map((bill, index) => {
        for (let i = 0; i < selectedConcerns.length; i++) {
          if (selectedConcerns[i].includes(bill.primary_subject)) {
            billCounts = billCounts + 1;
            return (
              <View key={index} style={[styles.bill]}>
                <Text style={[styles.title]}>
                  {bill.primary_subject}: {bill.number} - {bill.title}
                </Text>
                <Text style={[styles.bill]}>
                  {"Sponsored by " +
                    bill.sponsor_title +
                    " " +
                    bill.sponsor_name +
                    ", " +
                    bill.sponsor_party +
                    "-" +
                    bill.sponsor_state}
                </Text>
                <Text style={[styles.bill]}>
                  {bill.committees.match(/[a-zA-Z" "]+/g)}
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#df1f36",
                    margin: 10,
                    padding: 5,
                    width: 150
                  }}
                  onPress={() => Communications.web(bill.congressdotgov_url)}
                >
                  <Text style={{ color: "#fff", textAlign: "center" }}>
                    More Info
                  </Text>
                </TouchableOpacity>
              </View>
            );
            break;
          }
        }
      });
      if (billCounts == 0) {
        return (
          <View style={[styles.bill]}>
            <Text style={[styles.title]}>
              No Recent Legislation Matched Your Selected Subjects
            </Text>
          </View>
        );
      } else {
        return data;
      }
    } else {
      return (
        <View style={[styles.bill]}>
          <Text style={[styles.title]}>
            No Recent Legislation Matched Your Selected Subjects
          </Text>
        </View>
      );
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={[styles.container]}>
          <ActivityIndicator size="large" style={[styles.loader]} />
        </View>
      );
    }
    return (
      <ScrollView
        style={[styles.container]}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={{ marginBottom: 30 }}>
          <Text style={[styles.title1]}>Senate</Text>
          {this._renderSenateBills()}
        </View>
        <View style={{ marginBottom: 30 }}>
          <Text style={[styles.title1]}>House</Text>
          {this._renderHouseBills()}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  loader: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  bill: {
    flex: 1,
    alignItems: "center",
    marginBottom: 5,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 18,
    margin: 10,
    textAlign: "center"
  },
  title1: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 10,
    textAlign: "center"
  }
});
const mapStateToProps = state => {
  return {
    houseSubject: state.concerns
      .filter(subject => {
        return subject.checked && subject.house.length;
      })
      .map(subject => {
        return subject.house;
      }),
    senateSubject: state.concerns
      .filter(subject => {
        return subject.checked && subject.senate.length;
      })
      .map(subject => {
        return subject.senate;
      })
  };
};
export default connect(mapStateToProps, {})(Bills);
