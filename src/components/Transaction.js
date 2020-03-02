import React from "react";
import TransactionsTable from "./TransactionsTable";
import style from "./styles/transaction.module.css";

const Transaction = ({ transactions }) => (
  <table align="center" width="600">
    <thead>
      <tr bgcolor="lightseagreen" height="30">
        <th width="200">Type</th>
        <th width="200">Amount</th>
        <th width="200">Currency</th>
      </tr>
    </thead>
    <TransactionsTable transactions={transactions} />
  </table>
);
export default Transaction;
