import { Transactions } from "components/Transactions/Transactions";
import styles from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
    return (<table className={styles.transactionHistory}>
        <thead>
            <tr className={styles.row}>
                <th className={styles.box}>Type</th>
                <th className={styles.box}>Amount</th>
                <th className={styles.box}>Currency</th>
            </tr>
        </thead>

        <Transactions items={items} />
    </table>)
}