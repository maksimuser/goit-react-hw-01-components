import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendListItem from './components/FriendList/FriendListItem';
import friends from './components/FriendList/friends.json';
import statisticalData from './components/Statistics/statistical-data.json';
import user from './components/Profile/user.json';

const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      <FriendListItem friends={friends} />
    </div>
  );
};
export default App;
