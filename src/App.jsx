import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/Transactions/TransactionHistory';
import transactions from './components/json/transactions.json';
import friends from './components/json/friends.json';
import statisticalData from './components/json/statistical-data.json';
import user from './components/json/user.json';

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
      {/* <Statistics stats={statisticalData} /> */}

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
export default App;
