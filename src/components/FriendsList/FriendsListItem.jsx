import css from './FriendsListItem.module.css';
import PropTypes from 'prop-types';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      {isOnline ? (
        <span className={css.status_on}></span>
      ) : (
        <span className={css.status_off}></span>
      )}
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
};