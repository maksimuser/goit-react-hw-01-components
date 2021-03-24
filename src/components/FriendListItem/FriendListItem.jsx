import styles from './FriendListItem.module.css';

const FriendListItem = ({ id, avatar, name, isOnline }) => (
  <li key={id} className={styles.item}>
    <span className={isOnline ? styles.statusOn : styles.statusOff}></span>
    <img className={styles.avatar} src={avatar} width={48} alt="" />
    <p className={styles.name}>{name}</p>
  </li>
);

export default FriendListItem;
