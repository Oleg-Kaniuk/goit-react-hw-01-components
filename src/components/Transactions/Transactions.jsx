import styles from "./Transactions.module.css";

export const Transactions = ({ items }) => {
    return (
        <tbody>
            {items.map(({ id, type, amount, currency }) => {
                return (<tr className={styles.stroke} key={id}>
                    <td className={styles.box}>{type}</td>
                    <td className={styles.box}>{amount}</td>
                    <td className={styles.box}>{currency}</td>
                </tr>)
            })}
        </tbody>
    );
}