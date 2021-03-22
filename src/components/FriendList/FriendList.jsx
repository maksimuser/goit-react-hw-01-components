import PropTypes from 'prop-types';

const FriendList = ({ name, avatar, isOnline }) => (
  <>
    <span className="status">{isOnline}</span>
    <img className="avatar" src={avatar} width={48} alt="" />
    <p className="name">{name}</p>
  </>
);

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendList;
