import PropTypes from 'prop-types'
import friends from '../data/friends.json'
import FriendListItem from './FriendListItem'

export default function FriendList() {
    return (
        <FriendListItem friends={friends} />
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
    })),
}