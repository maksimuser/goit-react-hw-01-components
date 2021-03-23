import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <div className={styles.item}>
    <span className={isOnline ? styles.statusOn : styles.statusOff}></span>
    <img className={styles.avatar} src={avatar} width={48} alt="" />
    <p className={styles.name}>{name}</p>
  </div>
);

FriendListItem.propTypes = {
  id: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
  ),
};
export default FriendListItem;
