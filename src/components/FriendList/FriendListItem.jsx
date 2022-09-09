import { Chip, List, Item, Image, Name } from './FriendList.styled'

export default function FriendListItem({ friends }) {
    return (
        <List>
            {friends.map(friend => (
                <Item key={friend.id}>
                    <Chip friend={friend} />
                    <Image src={friend.avatar} alt="User avatar" width="48" />
                    <Name>{friend.name}</Name>
                </Item>
            ))}
        </List>
    )
}