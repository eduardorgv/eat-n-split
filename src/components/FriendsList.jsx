import { Friend } from "./Friend";

export const FriendsList = ({friends, selectedFriend, onSelection}) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend 
          key={friend.id} 
          friend={friend} 
          selectedFriend={selectedFriend} 
          onSelection={onSelection} 
        />
      ))}
    </ul>
  );
};
