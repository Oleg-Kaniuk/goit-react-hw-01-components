import user from "../datajson/user.json";
import { Profile } from "./Profile/Profile";

import data from "../datajson/data.json";
import { Statistics } from "./Statistics/Statistics";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React components
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
    </div>
    
  );
};
