import styles from "./FriendListItem.module.css";

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (<li className={styles.item}>
        <span className={ isOnline ? `${styles.status} ${styles.green}` : `${styles.status} ${styles.pink}`}></span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
    </li>);
}