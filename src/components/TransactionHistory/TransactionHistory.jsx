import { Transactions } from "components/Transactions/Transactions";
import styles from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
    return (<table className={styles.transactionHistory}>
        <thead>
            <tr className={styles.row}>
                <th className={styles.cell}>Type</th>
                <th className={styles.cell}>Amount</th>
                <th className={styles.cell}>Currency</th>
            </tr>
        </thead>

        <Transactions items={items} />
    </table>)
}