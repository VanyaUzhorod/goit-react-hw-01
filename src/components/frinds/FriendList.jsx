const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
            <img src={friend.avatar} alt={friend.name} width="100" />
            <p>{friend.name}</p>
            <p>{friend.isOnline}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default FriendList;
