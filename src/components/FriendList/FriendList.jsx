// import PropTypes from 'prop-types'
import friends from '../../data/friends.json'
import FriendListItem from './FriendListItem'
import { List } from './FriendList.styled'

export default function FriendList() {
    return (
        <List>
            <FriendListItem friends={friends} />
        </List>
    )
}

// FriendList.propTypes = {
//     friends: PropTypes.arrayOf(PropTypes.exact({
//         id: PropTypes.number.isRequired
//     })),
// }