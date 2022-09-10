import { Chip, Item, Image, Name } from './FriendList.styled'
import PropTypes from 'prop-types'

export default function FriendListItem({ friends }) {
    return (
        <>
            {friends.map(friend => (
                <Item key={friend.id}>
                    <Chip friend={friend} />
                    <Image src={friend.avatar} alt="User avatar" width="48" />
                    <Name>{friend.name}</Name>
                </Item>
            ))}
        </>
    )
}

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })),
}