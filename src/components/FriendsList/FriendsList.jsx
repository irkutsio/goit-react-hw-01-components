import css from './FriendsList.module.css';
import PropTypes from 'prop-types';
import { FriendsListItem } from './FriendsListItem';

export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ isOnline, avatar, name, id }) => (
        <FriendsListItem
          key={id}
          name={name}
          avatar={avatar}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
