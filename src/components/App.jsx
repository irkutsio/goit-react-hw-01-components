import { Title } from './Title/Title';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendList/FriendList';
import { TransactionHistory } from './Transactions/TransactionHistory';
import transactions from '../transactions.json';
import friends from '../friends.json';
import user from '../user.json';
import data from '../data.json';

export const App = () => {
  return (
    <div>
      <Title text="My first react homework" />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
