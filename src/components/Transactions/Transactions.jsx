import styles from "./Transactions.module.css";

export const Transactions = ({ items }) => {
    return (
        <tbody>
            {items.map(({ id, type, amount, currency }) => {
                return (<tr className={styles.line} key={id}>
                    <td className={styles.cell}>{type}</td>
                    <td className={styles.cell}>{amount}</td>
                    <td className={styles.cell}>{currency}</td>
                </tr>)
            })}
        </tbody>
    );
}