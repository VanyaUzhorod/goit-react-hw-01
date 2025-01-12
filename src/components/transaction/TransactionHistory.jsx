import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.tableThead}>
        <tr>
          <th className={css.thItem}>Type</th>
          <th className={css.thItem}>Amount</th>
          <th className={css.thItem}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tbBody}>
        {items.map((data) => {
          return (
            <tr className={css.tr} key={data.id}>
              <td className={css.type}>{data.type}</td>
              <td className={css.amount}>{data.amount}</td>
              <td className={css.currency}>{data.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default TransactionHistory;
