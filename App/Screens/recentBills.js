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

import { connect } from "react-redux";
import { fetchRecentBills } from "../../actions/searchActions";

class RecentBills extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Recently Introduced Bills",
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
    this.state = { loading: true, bills: [] };
  }

  async componentDidMount() {
    let { name, type } = this.props.navigation.state.params;
    let response = await this.props.fetchRecentBills(name, type);

    this.setState({
      bills: response.bills,
      loading: false
    });
  }

  _renderRow({ item }) {
    return (
      <RkCard rkType="shadowed">
        <View rkCardHeader>
          <Text style={styles.totalText}>{item.number}</Text>
        </View>

        <View rkCardContent style={[styles.card]}>
          <Text style={styles.cardText}>{item.title}</Text>

          <Text>{item.description}</Text>
          <Text>{`Committees : ${item.committees}`}</Text>
          <Text>{`Date Introduced: ${item.introduced_date}`}</Text>
          {item.active && item.house_passage ? (
            <Text style={styles.totalText}>
              {`House Passage : ${item.house_passage}`}
            </Text>
          ) : (
            <Text />
          )}
          {item.active && item.senate_passage ? (
            <Text style={styles.totalText}>
              {`Senate Passage : ${item.senate_passage}`}
            </Text>
          ) : (
            <Text />
          )}
          {item.active && item.enacted ? (
            <Text style={styles.totalText}>
              {`Senate Passage : ${item.enacted}`}
            </Text>
          ) : (
            <Text />
          )}
          {item.active && item.vetoed ? (
            <Text style={styles.totalText}>
              {`Senate Passage : ${item.vetoed}`}
            </Text>
          ) : (
            <Text />
          )}
          {item.congressdotgov_url ? (
            <TouchableOpacity
              style={{
                backgroundColor: "#df1f36",
                margin: 10,
                padding: 5,
                width: 150
              }}
              onPress={() => Communications.web(item.congressdotgov_url)}
            >
              <Text style={{ color: "#fff", textAlign: "center" }}>
                More Info
              </Text>
            </TouchableOpacity>
          ) : (
            <Text />
          )}
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
        data={this.state.bills}
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
export default connect(mapStateToProps, { fetchRecentBills })(RecentBills);
