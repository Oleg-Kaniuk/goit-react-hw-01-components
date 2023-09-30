import user from "../datajson/user.json";
import { Profile } from "./Profile/Profile";

import data from "../datajson/data.json";
import { Statistics } from "./Statistics/Statistics";

import friends from "../datajson/friends.json";
import { FriendList } from "./FriendList/FriendList";

import transactions from "../datajson/transactions.json";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

import styles from "./App.module.css"

export const App = () => {
  return (
    <div className={styles.container}>
      <h1>Social network profile</h1>
      <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
      />
      <Statistics
          title="Upload stats"
          stats={data}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
    
  );
};
