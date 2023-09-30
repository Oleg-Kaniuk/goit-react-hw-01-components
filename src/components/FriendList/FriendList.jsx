import { FriendListItem } from "components/FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
    return (
        <ul className={styles.friendList}>
            {friends.map(friend => {
                return <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline} />
            })
            }
        </ul>);
}