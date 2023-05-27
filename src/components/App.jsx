import { Title } from './Title/Title';
import { Profile } from './Profile/Profile';
import user from '../user.json';

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
    </div>
  );
};
