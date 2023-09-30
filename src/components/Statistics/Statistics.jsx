import { StatList } from "components/StatList/StatList";
import styles from "./Statistics.module.css";

export const Statistics = ({ title, stats }) => {
    return (<div className={styles.statistics}>
        {title && <h2 className="title">{title}</h2>}
        <StatList stats={stats}/>
    </div>)
}