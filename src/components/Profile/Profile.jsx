import PropTypes from 'prop-types'
import { Container, Description, Image, Name, Tag, Location, List, Item, Label, Quantity } from './Profile.styled'

export default function Profile({ username, tag, location, avatar, stats }) {
    return (
        <Container>
            <Description>
                <Image
                    src={avatar}
                    alt="User avatar"
                />
                <Name>{username}</Name>
                <Tag>{tag}</Tag>
                <Location>{location}</Location>
            </Description>

            <List>
                <Item>
                    <Label>Followers</Label>
                    <Quantity>{stats.followers}</Quantity>
                </Item>
                <Item>
                    <Label>Views</Label>
                    <Quantity>{stats.views}</Quantity>
                </Item>
                <Item>
                    <Label>Likes</Label>
                    <Quantity>{stats.likes}</Quantity>
                </Item>
            </List>
        </Container>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
}