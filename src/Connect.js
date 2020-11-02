import Sendbird from 'sendbird';

function Connect(sbAppId, sbUserId) {
    sb.connect(sbUserId, (user, error) => {
        if (error) {
            console.log(error);
        } 
    })
}

export default Connect;