import React from "react";
import PropTypes from "prop-types";
import TransactionsTable from "./TransactionsTable";
import style from "./styles/transaction.module.css";

const Transaction = ({ transactions }) => (
  <table className={style.table}>
    <thead>
      <tr className={style.transactionsTitle}>
        <th className={style.transactionCell}>Type</th>
        <th className={style.transactionCell}>Amount</th>
        <th className={style.transactionCell}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map((elem, idx) => (
        <tr key={idx}>
          <TransactionsTable {...elem} idx={idx} />
        </tr>
      ))}
    </tbody>
  </table>
);
Transaction.propTypes = {
  transactions: PropTypes.array
};
export default Transaction;
