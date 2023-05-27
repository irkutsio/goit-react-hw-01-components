import css from './FriendList.module.css';

export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(({ avatar, name, id, isOnline }) => (
        <li className={css.item} key={id}>
          <span className={css.status}>{isOnline}</span>
          <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};
