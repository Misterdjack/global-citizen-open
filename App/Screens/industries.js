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
import PropTypes from "prop-types";

import { searchContributors } from "../../actions/searchActions";
import { connect } from "react-redux";

class Industries extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Top Industries",
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
    this.state = { loading: true, contributors: [] };
  }

  _renderRow({ item }) {
    return (
      <RkCard rkType="shadowed">
        <View rkCardHeader>
          <Text style={styles.totalText}>
            {item["@attributes"].industry_name}
          </Text>
        </View>
        <View rkCardContent>
          <Text style={styles.cardText}>
            Contributions from Last Election Cycle:
          </Text>
          <Text>
            {"Individual: $" +
              item["@attributes"].indivs.replace(
                /(\d)(?=(\d\d\d)+(?!\d))/g,
                "$1,"
              )}
          </Text>
          <Text>
            {"PACs: $" +
              item["@attributes"].pacs.replace(
                /(\d)(?=(\d\d\d)+(?!\d))/g,
                "$1,"
              )}
          </Text>
          <Text style={styles.totalText}>
            {"Total: $" +
              item["@attributes"].total.replace(
                /(\d)(?=(\d\d\d)+(?!\d))/g,
                "$1,"
              )}
          </Text>
        </View>
      </RkCard>
    );
  }

  async componentDidMount() {
    let { name } = this.props.navigation.state.params;
    let contributors = await this.props.searchContributors(name, "industries");

    this.setState({
      contributors,
      loading: false
    });
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
        data={this.state.contributors}
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
export default connect(mapStateToProps, { searchContributors })(Industries);
