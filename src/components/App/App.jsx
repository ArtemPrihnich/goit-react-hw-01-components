import Profile from "../Profile/Profile";
import user from '../../data/user.json'
import Statistics from "../Statistics/Statistics";
// import data from '../../data/data.json'
import { Container } from "./App.styled";
import FriendList from "components/FriendList/FriendList";
import TransactionHistory from "components/TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics />
      <FriendList />
      <TransactionHistory />
    </Container>
  );
};
