import React, { Component } from 'react';
import { Text, StyleSheet, ScrollView, LogBox } from 'react-native';
import Sendbird from 'sendbird';
import { USER_ID, APP_ID } from '../const';
import DashboardList from './DashboardList';
import Connect from '../Connect';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        channels: []
    }
    this.getChannels = this.getChannels.bind(this);
  }

  getChannels() {
    const sb = Sendbird.getInstance();
    // .then(() => {
      let allUserChannels = sb.GroupChannel.createMyGroupChannelListQuery();
      allUserChannels.includeEmpty = true;
      allUserChannels.userIdsIncludeFilter = [ USER_ID ];
      allUserChannels.next((myChannels, error) => {
        if (error) {
          console.log('Get Channels error: ' + error);
          return;
        } else {
          this.setState({channels: myChannels})
        }
      });
    // });
  };

  componentDidMount() { 
      this.getChannels();
  }

  render() {
    return (
      <ScrollView>
        <Text style={styles.titleText}> Welcome, { USER_ID } </Text>
        <DashboardList channels={this.state.channels}/>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default Dashboard;