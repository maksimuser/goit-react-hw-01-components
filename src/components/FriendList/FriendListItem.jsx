import FriendList from './FriendList';
import PropTypes from 'prop-types';

const FriendListItem = ({ friends }) => (
  <section className="friends">
    <ul className="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className="item">
          <FriendList avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  </section>
);

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ).isRequired,
};

export default FriendListItem;
