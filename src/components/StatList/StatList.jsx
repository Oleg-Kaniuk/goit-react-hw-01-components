import { getRandomHexColor } from "./getRandomHexColor";
import styles from "./StatList.module.css";

export const StatList = ({ stats }) => {
    return (
        <ul className={styles.statList}>
            {stats.map( ({id, label, percentage}) => {
                return (<li key={id} className={styles.element} style={{backgroundColor: `${getRandomHexColor()}`}}>
                    <span className="label">{label}</span>
                    <span className="percentage">{percentage}%</span>
            </li>)
            })}
        </ul>
    )
}