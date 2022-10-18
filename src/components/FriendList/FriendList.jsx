import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            key={id}
            isOnline={isOnline}
            name={name}
            avatar={avatar}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
