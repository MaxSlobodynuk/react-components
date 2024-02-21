import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import clsx from 'clsx';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(item => (
        <li key={item.id} className={css.item}>
          <span
            className={clsx(css.status, item.isOnline ? css.green : css.red)}
          >
            0{item.isOnline}
          </span>
          <img
            className={css.avatar}
            src={item.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{item.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = { friends: PropTypes.array };
