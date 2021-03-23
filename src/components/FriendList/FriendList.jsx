import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
console.log(styles);
const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <li key={id} className={styles.item}>
        <span className={isOnline ? styles.statusOn : styles.statusOff}></span>
        <img className={styles.avatar} src={avatar} width={48} alt="" />
        <p className={styles.name}>{name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};
export default FriendList;
