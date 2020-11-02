import { USER_ID } from './const';
import Sendbird from 'sendbird';

export function createNewChannel(friendId) {
    const sb = Sendbird.getInstance();
    let params = new sb.GroupChannelParams();
    params.isPublic = false;
    params.isDistinct = true;
    params.addUserIds([USER_ID, friendId])

    sb.GroupChannel.createChannel(params, function(groupChannel, error) {
        if (error) {
            console.log(error);
            return;
        }
    });
}