import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td className={css.type}>{item.type}</td>
            <td className={css.amount}>{item.amount}</td>
            <td className={css.currency}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


TransactionHistory.propTypes = { items: PropTypes.array };