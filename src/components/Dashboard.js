import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollList } from 'react-native';
import { USER_ID } from '../const';
import { _getSbInstance } from '../utils';
import DashboardList from './DashboardList';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        channels: []
    }
    this.userId = USER_ID;
    this.sb = _getSbInstance();
  
    this.getChannels = this.getChannels.bind(this);
  }

  getChannels() {
    let allUserChannels = this.sb.GroupChannel.createMyGroupChannelListQuery();
    allUserChannels.includeEmpty = true;
    allUserChannels.userIdsIncludeFilter = [this.userId];
    allUserChannels.next((myChannels, error) => {
      if (error) {
        return error;
      } else {
        console.log(myChannels);
        this.setState({channels: myChannels})
      }
    });
  }

  componentDidMount() { 
      this.getChannels();
  }

  render() {
    return (
      <View>
        <Text style={styles.titleText}> Welcome, { USER_ID } </Text>
          <ScrollList>
            <DashboardList channels={this.state.channels}/>
          </ScrollList>
      </View>
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