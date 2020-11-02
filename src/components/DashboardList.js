import React from 'react';
import { USER_ID } from '../const';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const DashboardList = (props) => {
    const channels = props.channels; 
    let _friendId = "";

    const goToChat = () => {
        Actions.chat()
     }

    const friendName = (channel) => {
        if (channel.members[0].userId !== USER_ID) {
            _friendId = channel.members[1].userId;
        } 
        _friendId = channel.members[1].userId;
    }

    let chatList = channels.map((channel => {
        friendName(channel);
        return (
            <TouchableOpacity onPress= {goToChat} >
                <Text>{_friendId}</Text>
            </TouchableOpacity>
        );
    }))

    return (chatList);
}

export default DashboardList;