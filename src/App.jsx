import Profile from "./components/profile/Profile";
import FriendList from "./components/frinds/FriendList";
import TransactionHistory from "./components/transaction/TransactionHistory";
import transactions from "./transactions.json";
import userData from "./userData.json";
import friends from "./friends.json";
import "./App.css";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
export default App;
