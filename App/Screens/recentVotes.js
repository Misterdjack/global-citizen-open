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
import { RkCard } from "react-native-ui-kitten";
import Communications from "react-native-communications";
import PropTypes from "prop-types";

import { searchContributors } from "../../actions/searchActions";
import { connect } from "react-redux";
import { fetchRecentVotes } from "../../actions/searchActions";

class RecentVotes extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Recent Votes",
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
    this.state = { loading: true, votes: [] };
  }
  async componentDidMount() {
    let { name, type } = this.props.navigation.state.params;
    let response = await this.props.fetchRecentVotes(name, type);

    this.setState({
      votes: response.votes.slice(0, 19),
      loading: false
    });
  }
  _renderRow({ item }) {
    return (
      <RkCard rkType="shadowed">
        {Object.keys(item.bill).length ? (
          <View rkCardHeader>
            <Text style={styles.totalText}>{item.bill.number}</Text>
          </View>
        ) : (
          <Text />
        )}

        <View rkCardContent style={[styles.card]}>
          {Object.keys(item.bill).length ? (
            <Text style={styles.cardText}>{item.bill.title}</Text>
          ) : (
            <Text />
          )}

          <Text>{item.description}</Text>
          <Text>{`Date : ${item.date}`}</Text>
          {Object.keys(item.bill).length ? (
            <Text>{`Latest Action: ${item.bill.latest_action}`}</Text>
          ) : (
            <Text />
          )}
          <Text style={styles.totalText}>{`Vote: ${item.position}`}</Text>
          <Text style={styles.totalText}>{`Result : ${item.result}`}</Text>
          {/* {Object.keys(item.bill).length
            ? <TouchableOpacity
                style={{
                  backgroundColor: "#df1f36",
                  margin: 10,
                  padding: 5,
                  width: 150
                }}
                onPress={() => Communications.web(item.bill.congressdotgov_url)}
              >
                <Text style={{ color: "#fff", textAlign: "center" }}>
                  More Info
                </Text>
              </TouchableOpacity>
            : <Text />} */}
        </View>
      </RkCard>
    );
  }

  _keyExtractor = (item, index) => index;

  render() {
    if (this.state.loading) {
      return (
        <View style={[styles.container]}>
          <ActivityIndicator size="large" style={[styles.loader]} />
        </View>
      );
    }
    return (
      <FlatList
        data={this.state.votes}
        renderItem={this._renderRow}
        keyExtractor={this._keyExtractor}
        style={{ padding: 4 }}
        ItemSeparatorComponent={() => (
          <View style={{ borderBottomWidth: 1, borderColor: "#e9ebee" }} />
        )}
      />
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
    backgroundColor: "#df1f36"
  },
  whiteFont: {
    color: "#fff"
  },
  loader: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  card: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10
  },
  cardText: {
    fontWeight: "bold"
  },
  totalText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20
  }
});
const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps, { fetchRecentVotes })(RecentVotes);
