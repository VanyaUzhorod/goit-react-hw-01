const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((data) => {
          return (
            <tr key={data.id}>
              <td>{data.type}</td>
              <td>{data.amount}</td>
              <td>{data.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default TransactionHistory;
